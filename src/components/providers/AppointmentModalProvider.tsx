"use client";

import React, { createContext, useContext, useState } from "react";
import { AppointmentModal } from "@/components/ui/AppointmentModal";

interface AppointmentModalContextType {
  isOpen: boolean;
  openModal: (serviceName?: string) => void;
  closeModal: () => void;
}

const AppointmentModalContext = createContext<AppointmentModalContextType | undefined>(
  undefined
);

export function AppointmentModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const openModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AppointmentModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <AppointmentModal
        isOpen={isOpen}
        onClose={closeModal}
        initialService={selectedService}
      />
    </AppointmentModalContext.Provider>
  );
}

export function useAppointmentModal() {
  const context = useContext(AppointmentModalContext);
  if (!context) {
    throw new Error("useAppointmentModal must be used within an AppointmentModalProvider");
  }
  return context;
}
