import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Video, MapPin, Plus, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Calendar } from '../ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const upcomingBookings = [
  {
    id: 1,
    title: 'Consultation Stratégie IA',
    date: '2024-02-15',
    time: '14:00',
    duration: '60 min',
    type: 'video',
    status: 'confirmed',
    client: 'Acme Corp',
    consultant: 'Marie Dubois'
  },
  {
    id: 2,
    title: 'Formation Micro-Agents',
    date: '2024-02-16',
    time: '10:00',
    duration: '120 min',
    type: 'onsite',
    status: 'confirmed',
    client: 'TechStart Inc',
    consultant: 'Jean Martin'
  },
  {
    id: 3,
    title: 'Revue de Performance',
    date: '2024-02-17',
    time: '15:30',
    duration: '45 min',
    type: 'video',
    status: 'pending',
    client: 'Global Solutions',
    consultant: 'Sophie Laurent'
  },
];

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
];

export default function BookingsTab() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-muted text-foreground dark:bg-muted dark:text-foreground';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="h-4 w-4" />;
      case 'onsite':
        return <MapPin className="h-4 w-4" />;
      default:
        return <CalendarIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header with CTA */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold">Réservations</h2>
          <p className="text-muted-foreground">Gérez vos consultations et formations</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nouvelle Réservation
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Nouvelle Réservation</DialogTitle>
              <DialogDescription>
                Planifiez une consultation ou une formation
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="service">Type de Service</Label>
                <Select>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Sélectionner un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">Consultation Stratégie IA</SelectItem>
                    <SelectItem value="training">Formation Micro-Agents</SelectItem>
                    <SelectItem value="review">Revue de Performance</SelectItem>
                    <SelectItem value="demo">Démonstration Produit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input 
                  id="date" 
                  type="date" 
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Heure</Label>
                <Select value={selectedSlot} onValueChange={setSelectedSlot}>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Sélectionner un créneau" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Format</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Sélectionner le format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">Visioconférence</SelectItem>
                    <SelectItem value="onsite">Sur site</SelectItem>
                    <SelectItem value="phone">Téléphone</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes (optionnel)</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Informations complémentaires..."
                  rows={3}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Annuler
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>
                Confirmer la Réservation
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Calendrier</CardTitle>
            <CardDescription>Sélectionnez une date</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Upcoming Bookings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Réservations à Venir</CardTitle>
                <CardDescription>Vos prochains rendez-vous</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filtrer
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div 
                  key={booking.id}
                  className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{booking.title}</h3>
                      <p className="text-sm text-muted-foreground">{booking.client}</p>
                    </div>
                    <Badge className={getStatusColor(booking.status)}>
                      {booking.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{new Date(booking.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{booking.time} ({booking.duration})</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {getTypeIcon(booking.type)}
                      <span>{booking.type === 'video' ? 'Visio' : 'Sur site'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-xs">Consultant: {booking.consultant}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      Modifier
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Annuler
                    </Button>
                    {booking.type === 'video' && (
                      <Button size="sm" className="flex-1 gap-2">
                        <Video className="h-4 w-4" />
                        Rejoindre
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Available Time Slots */}
      <Card>
        <CardHeader>
          <CardTitle>Créneaux Disponibles</CardTitle>
          <CardDescription>
            {date ? `Pour le ${date.toLocaleDateString('fr-FR')}` : 'Sélectionnez une date'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className="p-3 border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                <Clock className="h-4 w-4 mx-auto mb-1" />
                <span className="text-sm font-medium">{slot}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
