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

interface BookingsTabProps {
  lang?: 'en' | 'fr' | 'es' | 'pt';
}

type TranslationKey = 'en' | 'fr' | 'es' | 'pt';

const translations: Record<TranslationKey, any> = {
  en: {
    title: 'Bookings',
    subtitle: 'Manage your consultations and training sessions',
    newBooking: 'New Booking',
    calendar: {
      title: 'Calendar',
      description: 'Select a date'
    },
    upcoming: {
      title: 'Upcoming Bookings',
      description: 'Your next appointments'
    },
    availableSlots: {
      title: 'Available Time Slots',
      description: 'For'
    },
    dialog: {
      title: 'New Booking',
      description: 'Schedule a consultation or training',
      serviceType: 'Service Type',
      selectService: 'Select a service',
      date: 'Date',
      time: 'Time',
      selectSlot: 'Select a time slot',
      format: 'Format',
      selectFormat: 'Select format',
      notes: 'Notes (optional)',
      notesPlaceholder: 'Additional information...',
      cancel: 'Cancel',
      confirm: 'Confirm Booking'
    },
    services: {
      consultation: 'AI Strategy Consultation',
      training: 'Micro-Agents Training',
      review: 'Performance Review',
      demo: 'Product Demo'
    },
    formats: {
      video: 'Video Conference',
      onsite: 'On-site',
      phone: 'Phone'
    },
    status: {
      confirmed: 'Confirmed',
      pending: 'Pending',
      cancelled: 'Cancelled'
    },
    actions: {
      edit: 'Edit',
      cancel: 'Cancel',
      join: 'Join',
      filter: 'Filter'
    },
    consultant: 'Consultant'
  },
  fr: {
    title: 'Réservations',
    subtitle: 'Gérez vos consultations et formations',
    newBooking: 'Nouvelle Réservation',
    calendar: {
      title: 'Calendrier',
      description: 'Sélectionnez une date'
    },
    upcoming: {
      title: 'Réservations à Venir',
      description: 'Vos prochains rendez-vous'
    },
    availableSlots: {
      title: 'Créneaux Disponibles',
      description: 'Pour le'
    },
    dialog: {
      title: 'Nouvelle Réservation',
      description: 'Planifiez une consultation ou une formation',
      serviceType: 'Type de Service',
      selectService: 'Sélectionner un service',
      date: 'Date',
      time: 'Heure',
      selectSlot: 'Sélectionner un créneau',
      format: 'Format',
      selectFormat: 'Sélectionner le format',
      notes: 'Notes (optionnel)',
      notesPlaceholder: 'Informations complémentaires...',
      cancel: 'Annuler',
      confirm: 'Confirmer la Réservation'
    },
    services: {
      consultation: 'Consultation Stratégie IA',
      training: 'Formation Micro-Agents',
      review: 'Revue de Performance',
      demo: 'Démonstration Produit'
    },
    formats: {
      video: 'Visioconférence',
      onsite: 'Sur site',
      phone: 'Téléphone'
    },
    status: {
      confirmed: 'Confirmé',
      pending: 'En attente',
      cancelled: 'Annulé'
    },
    actions: {
      edit: 'Modifier',
      cancel: 'Annuler',
      join: 'Rejoindre',
      filter: 'Filtrer'
    },
    consultant: 'Consultant'
  },
  es: {
    title: 'Reservas',
    subtitle: 'Gestione sus consultas y formaciones',
    newBooking: 'Nueva Reserva',
    calendar: {
      title: 'Calendario',
      description: 'Seleccione una fecha'
    },
    upcoming: {
      title: 'Próximas Reservas',
      description: 'Sus próximas citas'
    },
    availableSlots: {
      title: 'Horarios Disponibles',
      description: 'Para el'
    },
    dialog: {
      title: 'Nueva Reserva',
      description: 'Programe una consulta o formación',
      serviceType: 'Tipo de Servicio',
      selectService: 'Seleccionar un servicio',
      date: 'Fecha',
      time: 'Hora',
      selectSlot: 'Seleccionar un horario',
      format: 'Formato',
      selectFormat: 'Seleccionar formato',
      notes: 'Notas (opcional)',
      notesPlaceholder: 'Información adicional...',
      cancel: 'Cancelar',
      confirm: 'Confirmar Reserva'
    },
    services: {
      consultation: 'Consulta Estrategia IA',
      training: 'Formación Micro-Agentes',
      review: 'Revisión de Rendimiento',
      demo: 'Demostración de Producto'
    },
    formats: {
      video: 'Videoconferencia',
      onsite: 'Presencial',
      phone: 'Teléfono'
    },
    status: {
      confirmed: 'Confirmado',
      pending: 'Pendiente',
      cancelled: 'Cancelado'
    },
    actions: {
      edit: 'Editar',
      cancel: 'Cancelar',
      join: 'Unirse',
      filter: 'Filtrar'
    },
    consultant: 'Consultor'
  },
  pt: {
    title: 'Reservas',
    subtitle: 'Gerencie suas consultas e treinamentos',
    newBooking: 'Nova Reserva',
    calendar: {
      title: 'Calendário',
      description: 'Selecione uma data'
    },
    upcoming: {
      title: 'Próximas Reservas',
      description: 'Seus próximos compromissos'
    },
    availableSlots: {
      title: 'Horários Disponíveis',
      description: 'Para'
    },
    dialog: {
      title: 'Nova Reserva',
      description: 'Agende uma consulta ou treinamento',
      serviceType: 'Tipo de Serviço',
      selectService: 'Selecionar um serviço',
      date: 'Data',
      time: 'Hora',
      selectSlot: 'Selecionar um horário',
      format: 'Formato',
      selectFormat: 'Selecionar formato',
      notes: 'Notas (opcional)',
      notesPlaceholder: 'Informações adicionais...',
      cancel: 'Cancelar',
      confirm: 'Confirmar Reserva'
    },
    services: {
      consultation: 'Consulta Estratégia IA',
      training: 'Treinamento Micro-Agentes',
      review: 'Revisão de Desempenho',
      demo: 'Demonstração de Produto'
    },
    formats: {
      video: 'Videoconferência',
      onsite: 'Presencial',
      phone: 'Telefone'
    },
    status: {
      confirmed: 'Confirmado',
      pending: 'Pendente',
      cancelled: 'Cancelado'
    },
    actions: {
      edit: 'Editar',
      cancel: 'Cancelar',
      join: 'Entrar',
      filter: 'Filtrar'
    },
    consultant: 'Consultor'
  }
};

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
];

export default function BookingsTab({ lang = 'fr' }: BookingsTabProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');

  const t = translations[lang];

  const upcomingBookings = [
    {
      id: 1,
      title: t.services.consultation,
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
      title: t.services.training,
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
      title: t.services.review,
      date: '2024-02-17',
      time: '15:30',
      duration: '45 min',
      type: 'video',
      status: 'pending',
      client: 'Global Solutions',
      consultant: 'Sophie Laurent'
    },
  ];

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

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'video':
        return t.formats.video;
      case 'onsite':
        return t.formats.onsite;
      default:
        return type;
    }
  };

  const getStatusLabel = (status: string) => {
    return t.status[status as keyof typeof t.status] || status;
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header with CTA */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold">{t.title}</h2>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              {t.newBooking}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{t.dialog.title}</DialogTitle>
              <DialogDescription>
                {t.dialog.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="service">{t.dialog.serviceType}</Label>
                <Select>
                  <SelectTrigger id="service">
                    <SelectValue placeholder={t.dialog.selectService} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">{t.services.consultation}</SelectItem>
                    <SelectItem value="training">{t.services.training}</SelectItem>
                    <SelectItem value="review">{t.services.review}</SelectItem>
                    <SelectItem value="demo">{t.services.demo}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">{t.dialog.date}</Label>
                <Input 
                  id="date" 
                  type="date" 
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">{t.dialog.time}</Label>
                <Select value={selectedSlot} onValueChange={setSelectedSlot}>
                  <SelectTrigger id="time">
                    <SelectValue placeholder={t.dialog.selectSlot} />
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
                <Label htmlFor="type">{t.dialog.format}</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder={t.dialog.selectFormat} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">{t.formats.video}</SelectItem>
                    <SelectItem value="onsite">{t.formats.onsite}</SelectItem>
                    <SelectItem value="phone">{t.formats.phone}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">{t.dialog.notes}</Label>
                <Textarea 
                  id="notes" 
                  placeholder={t.dialog.notesPlaceholder}
                  rows={3}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                {t.dialog.cancel}
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>
                {t.dialog.confirm}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>{t.calendar.title}</CardTitle>
            <CardDescription>{t.calendar.description}</CardDescription>
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
                <CardTitle>{t.upcoming.title}</CardTitle>
                <CardDescription>{t.upcoming.description}</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                {t.actions.filter}
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
                      {getStatusLabel(booking.status)}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{new Date(booking.date).toLocaleDateString(lang === 'en' ? 'en-US' : lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : 'pt-PT')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{booking.time} ({booking.duration})</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {getTypeIcon(booking.type)}
                      <span>{getTypeLabel(booking.type)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-xs">{t.consultant}: {booking.consultant}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      {t.actions.edit}
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      {t.actions.cancel}
                    </Button>
                    {booking.type === 'video' && (
                      <Button size="sm" className="flex-1 gap-2">
                        <Video className="h-4 w-4" />
                        {t.actions.join}
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
          <CardTitle>{t.availableSlots.title}</CardTitle>
          <CardDescription>
            {date ? `${t.availableSlots.description} ${date.toLocaleDateString(lang === 'en' ? 'en-US' : lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : 'pt-PT')}` : t.calendar.description}
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
