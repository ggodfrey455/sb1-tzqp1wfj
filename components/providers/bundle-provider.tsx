"use client";

import { createContext, useContext, useState } from 'react';
import type { Equipment } from '@/lib/types';

interface BundleContextType {
  items: Equipment[];
  addItem: (item: Equipment) => void;
  removeItem: (itemId: string) => void;
  clearBundle: () => void;
}

const BundleContext = createContext<BundleContextType | undefined>(undefined);

export function BundleProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Equipment[]>([]);

  const addItem = (item: Equipment) => {
    setItems((prev) => [...prev, item]);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.name !== itemId));
  };

  const clearBundle = () => {
    setItems([]);
  };

  return (
    <BundleContext.Provider value={{ items, addItem, removeItem, clearBundle }}>
      {children}
    </BundleContext.Provider>
  );
}

export function useBundle() {
  const context = useContext(BundleContext);
  if (!context) {
    throw new Error('useBundle must be used within a BundleProvider');
  }
  return context;
}