import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/ui/Header";
import NotFound from "pages/NotFound";
import Homepage from "pages/homepage-premium-discovery-platform";
import SearchResults from "pages/search-results-intelligent-discovery";
import ContactSupport from "pages/contact-support-hub";
import AboutBrand from "pages/about-brand-story";
import BookingConfirmation from "pages/booking-confirmation-pre-arrival-experience";
import UserDashboard from "pages/user-dashboard-travel-command-center";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage-premium-discovery-platform" element={<Homepage />} />
          <Route path="/search-results-intelligent-discovery" element={<SearchResults />} />
          <Route path="/contact-support-hub" element={<ContactSupport />} />
          <Route path="/about-brand-story" element={<AboutBrand />} />
          <Route path="/booking-confirmation-pre-arrival-experience" element={<BookingConfirmation />} />
          <Route path="/user-dashboard-travel-command-center" element={<UserDashboard />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;