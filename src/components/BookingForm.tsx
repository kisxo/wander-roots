import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const bookingSchema = z.object({
  tour_name: z.string().min(2, "Tour name is required"),
  destination: z.string().min(2, "Destination is required"),
  start_date: z.string().min(1, "Start date is required"),
  end_date: z.string().min(1, "End date is required"),
  travelers: z.number().min(1, "At least 1 traveler required"),
  total_price: z.number().min(0, "Price must be positive"),
});

interface BookingFormProps {
  userId: string;
  onComplete: () => void;
}

const BookingForm = ({ userId, onComplete }: BookingFormProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const bookingData = {
        tour_name: formData.get("tour_name") as string,
        destination: formData.get("destination") as string,
        start_date: formData.get("start_date") as string,
        end_date: formData.get("end_date") as string,
        travelers: parseInt(formData.get("travelers") as string),
        total_price: parseFloat(formData.get("total_price") as string),
        special_requests: formData.get("special_requests") as string,
      };

      bookingSchema.parse(bookingData);

      const { error } = await supabase.from("bookings").insert([
        {
          ...bookingData,
          user_id: userId,
          status: "pending",
        },
      ]);

      if (error) throw error;

      onComplete();
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error.message || "Failed to create booking",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="tour_name">Tour Name</Label>
          <Input id="tour_name" name="tour_name" placeholder="Alpine Adventure" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Input id="destination" name="destination" placeholder="Swiss Alps" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="start_date">Start Date</Label>
          <Input id="start_date" name="start_date" type="date" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="end_date">End Date</Label>
          <Input id="end_date" name="end_date" type="date" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="travelers">Number of Travelers</Label>
          <Input id="travelers" name="travelers" type="number" min="1" defaultValue="1" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="total_price">Total Price (₹)</Label>
          <Input id="total_price" name="total_price" type="number" step="0.01" min="0" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="special_requests">Special Requests (Optional)</Label>
        <Textarea 
          id="special_requests" 
          name="special_requests" 
          placeholder="Any dietary restrictions, accessibility needs, or preferences..."
          rows={3}
        />
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Booking"}
        </Button>
        <Button type="button" variant="outline" onClick={onComplete}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
