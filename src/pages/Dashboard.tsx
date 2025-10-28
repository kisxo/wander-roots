import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MapPin, User as UserIcon, LogOut, Plus } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import ProfileForm from "@/components/ProfileForm";

interface Booking {
  id: string;
  tour_name: string;
  destination: string;
  start_date: string;
  end_date: string;
  travelers: number;
  total_price: number;
  status: string;
  special_requests: string | null;
}

interface Profile {
  full_name: string | null;
  email: string | null;
  phone: string | null;
  avatar_url: string | null;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check auth and fetch data
    const initDashboard = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);
      await fetchProfile(session.user.id);
      await fetchBookings(session.user.id);
      setLoading(false);
    };

    initDashboard();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        navigate("/auth");
      }
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();

    if (!error && data) {
      setProfile(data);
    }
  };

  const fetchBookings = async (userId: string) => {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setBookings(data);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const handleBookingComplete = () => {
    setShowBookingForm(false);
    if (user) {
      fetchBookings(user.id);
    }
    toast({
      title: "Booking created!",
      description: "Your trip has been booked successfully.",
    });
  };

  const handleProfileUpdate = () => {
    if (user) {
      fetchProfile(user.id);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 mt-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, {profile?.full_name || "Traveler"}!</h1>
              <p className="text-muted-foreground">Manage your trips and profile</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="bookings" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="bookings" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Your Bookings</h2>
                <Button onClick={() => setShowBookingForm(!showBookingForm)}>
                  <Plus className="mr-2 h-4 w-4" />
                  New Booking
                </Button>
              </div>

              {showBookingForm && user && (
                <Card className="p-6">
                  <BookingForm userId={user.id} onComplete={handleBookingComplete} />
                </Card>
              )}

              {bookings.length === 0 ? (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground mb-4">No bookings yet</p>
                  <Button onClick={() => setShowBookingForm(true)}>Book Your First Trip</Button>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {bookings.map((booking) => (
                    <Card key={booking.id} className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{booking.tour_name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{booking.destination}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(booking.start_date).toLocaleDateString()} - {new Date(booking.end_date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <UserIcon className="h-4 w-4" />
                          <span>{booking.travelers} traveler(s)</span>
                        </div>
                      </div>

                      {booking.special_requests && (
                        <p className="mt-4 text-sm text-muted-foreground">
                          <strong>Special Requests:</strong> {booking.special_requests}
                        </p>
                      )}

                      <div className="mt-4 pt-4 border-t flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">₹{booking.total_price}</span>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="profile">
              <Card className="p-6 max-w-2xl">
                <h2 className="text-2xl font-bold mb-6">Your Profile</h2>
                {user && <ProfileForm userId={user.id} profile={profile} onUpdate={handleProfileUpdate} />}
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
