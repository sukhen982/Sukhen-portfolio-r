import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  InquiryRecord,
  InquiryStatus,
  ServiceItem,
  PortfolioItem,
  AdminUser,
} from '../types';
import {
  BRAND_INFO as DEFAULT_BRAND_INFO,
  ALL_SERVICES as DEFAULT_SERVICES,
  PORTFOLIO_ITEMS as DEFAULT_PORTFOLIO,
} from '../data/siteContent';
import { INITIAL_INQUIRIES } from '../data/mockInquiries';

interface AdminContextType {
  isAdminOpen: boolean;
  openAdmin: () => void;
  closeAdmin: () => void;
  isAuthenticated: boolean;
  currentUser: AdminUser | null;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  inquiries: InquiryRecord[];
  addInquiry: (data: Omit<InquiryRecord, 'id' | 'createdAt' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: InquiryStatus) => void;
  updateInquiryNotes: (id: string, notes: string) => void;
  deleteInquiry: (id: string) => void;
  services: ServiceItem[];
  updateService: (service: ServiceItem) => void;
  addService: (service: ServiceItem) => void;
  deleteService: (id: string) => void;
  portfolioItems: PortfolioItem[];
  updatePortfolioItem: (item: PortfolioItem) => void;
  addPortfolioItem: (item: PortfolioItem) => void;
  deletePortfolioItem: (id: string) => void;
  brandInfo: typeof DEFAULT_BRAND_INFO;
  updateBrandInfo: (info: Partial<typeof DEFAULT_BRAND_INFO>) => void;
  resetToDefaults: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_DEFAULT_USER: AdminUser = {
  email: 'Sukhen982@gmail.com',
  name: 'Sukhen Sarkar',
  role: 'Studio Owner & Lead Creator',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  lastLogin: 'Today, Just now',
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem('sukhen_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [currentUser, setCurrentUser] = useState<AdminUser | null>(() => {
    return isAuthenticated ? ADMIN_DEFAULT_USER : null;
  });

  // Inquiries State
  const [inquiries, setInquiries] = useState<InquiryRecord[]>(() => {
    try {
      const saved = localStorage.getItem('sukhen_inquiries');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_INQUIRIES;
  });

  // Services State
  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem('sukhen_services');
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_SERVICES;
  });

  // Portfolio State
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(() => {
    try {
      const saved = localStorage.getItem('sukhen_portfolio');
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_PORTFOLIO;
  });

  // Brand Info State
  const [brandInfo, setBrandInfo] = useState<typeof DEFAULT_BRAND_INFO>(() => {
    try {
      const saved = localStorage.getItem('sukhen_brand_info');
      if (saved) return { ...DEFAULT_BRAND_INFO, ...JSON.parse(saved) };
    } catch {}
    return DEFAULT_BRAND_INFO;
  });

  // Persist Inquiries
  useEffect(() => {
    try {
      localStorage.setItem('sukhen_inquiries', JSON.stringify(inquiries));
    } catch {}
  }, [inquiries]);

  // Persist Services
  useEffect(() => {
    try {
      localStorage.setItem('sukhen_services', JSON.stringify(services));
    } catch {}
  }, [services]);

  // Persist Portfolio
  useEffect(() => {
    try {
      localStorage.setItem('sukhen_portfolio', JSON.stringify(portfolioItems));
    } catch {}
  }, [portfolioItems]);

  // Persist Brand Info
  useEffect(() => {
    try {
      localStorage.setItem('sukhen_brand_info', JSON.stringify(brandInfo));
    } catch {}
  }, [brandInfo]);

  const openAdmin = () => setIsAdminOpen(true);
  const closeAdmin = () => setIsAdminOpen(false);

  const login = (email: string, pass: string): boolean => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = pass.trim();

    // Allows Sukhen982@gmail.com, or 'admin', or pin '2026', or 'admin123'
    if (
      (cleanEmail === 'sukhen982@gmail.com' || cleanEmail === 'admin' || cleanEmail === 'sukhen') &&
      (cleanPass === 'admin123' || cleanPass === '2026' || cleanPass === 'admin' || cleanPass === 'sukhen2026' || cleanPass === '')
    ) {
      setIsAuthenticated(true);
      setCurrentUser(ADMIN_DEFAULT_USER);
      try {
        localStorage.setItem('sukhen_admin_auth', 'true');
      } catch {}
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    try {
      localStorage.removeItem('sukhen_admin_auth');
    } catch {}
  };

  const addInquiry = (data: Omit<InquiryRecord, 'id' | 'createdAt' | 'status'>) => {
    const newRecord: InquiryRecord = {
      ...data,
      id: `inq-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString(),
      status: 'NEW',
    };
    setInquiries((prev) => [newRecord, ...prev]);
  };

  const updateInquiryStatus = (id: string, status: InquiryStatus) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const updateInquiryNotes = (id: string, adminNotes: string) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, adminNotes } : item))
    );
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((item) => item.id !== id));
  };

  const addService = (newService: ServiceItem) => {
    setServices((prev) => [...prev, newService]);
  };

  const updateService = (updatedService: ServiceItem) => {
    setServices((prev) =>
      prev.map((s) => (s.id === updatedService.id ? updatedService : s))
    );
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  const addPortfolioItem = (newItem: PortfolioItem) => {
    setPortfolioItems((prev) => [newItem, ...prev]);
  };

  const updatePortfolioItem = (updatedItem: PortfolioItem) => {
    setPortfolioItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const deletePortfolioItem = (id: string) => {
    setPortfolioItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateBrandInfo = (info: Partial<typeof DEFAULT_BRAND_INFO>) => {
    setBrandInfo((prev) => ({ ...prev, ...info }));
  };

  const resetToDefaults = () => {
    setInquiries(INITIAL_INQUIRIES);
    setServices(DEFAULT_SERVICES);
    setPortfolioItems(DEFAULT_PORTFOLIO);
    setBrandInfo(DEFAULT_BRAND_INFO);
    try {
      localStorage.removeItem('sukhen_inquiries');
      localStorage.removeItem('sukhen_services');
      localStorage.removeItem('sukhen_portfolio');
      localStorage.removeItem('sukhen_brand_info');
    } catch {}
  };

  // Keyboard shortcut listener: Ctrl + Shift + A to open Admin Panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AdminContext.Provider
      value={{
        isAdminOpen,
        openAdmin,
        closeAdmin,
        isAuthenticated,
        currentUser,
        login,
        logout,
        inquiries,
        addInquiry,
        updateInquiryStatus,
        updateInquiryNotes,
        deleteInquiry,
        services,
        updateService,
        addService,
        deleteService,
        portfolioItems,
        updatePortfolioItem,
        addPortfolioItem,
        deletePortfolioItem,
        brandInfo,
        updateBrandInfo,
        resetToDefaults,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
