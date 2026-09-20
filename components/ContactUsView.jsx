import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe2,
  ExternalLink,
  Send,
  CheckCircle2,
  Building2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  Calendar,
  Headphones,
  Navigation,
  Compass,
  Check,
  Building,
  Layers,
  FileCheck2,
  Copy,
  Users,
  Eye
} from 'lucide-react';

const geoCountryPaths = {
  "Saudi Arabia": "M 280.3 411.3 L 277.7 403.4 L 271.8 397.8 L 270.3 390.5 L 260.2 383.9 L 249.8 368.4 L 244.2 353.3 L 230.7 340.6 L 221.9 337.6 L 209.0 320.0 L 206.7 307.2 L 207.5 296.2 L 196.3 275.8 L 187.1 268.5 L 176.6 264.7 L 170.1 254.2 L 171.2 250.0 L 165.7 240.4 L 160.0 236.3 L 152.4 222.6 L 140.5 207.7 L 130.5 195.0 L 120.7 195.1 L 123.8 184.9 L 124.6 178.5 L 127.1 171.1 L 148.9 174.0 L 157.3 168.4 L 162.0 161.7 L 176.9 159.2 L 180.2 153.0 L 186.6 149.8 L 167.1 131.4 L 206.3 122.1 L 210.1 119.3 L 233.7 124.3 L 262.8 137.3 L 318.1 174.4 L 354.5 175.9 L 371.9 177.6 L 376.8 186.4 L 390.6 186.0 L 398.3 201.9 L 407.9 206.1 L 411.3 212.6 L 424.7 220.3 L 425.8 228.0 L 423.9 234.1 L 426.4 240.3 L 432.0 245.5 L 434.6 251.5 L 437.5 256.1 L 443.5 259.7 L 448.9 258.4 L 452.6 265.5 L 453.3 269.7 L 460.8 288.4 L 519.7 297.7 L 523.7 293.8 L 532.6 306.9 L 519.6 343.8 L 460.8 362.3 L 404.4 369.4 L 386.1 377.7 L 372.1 397.1 L 362.9 400.2 L 358.0 394.0 L 350.5 394.9 L 331.6 393.1 L 328.0 391.2 L 305.4 391.7 L 300.1 393.3 L 292.0 388.5 L 286.9 397.6 L 288.9 405.4 L 280.3 411.3 Z",
  "United Arab Emirates": "M 452.6 265.5 L 456.1 264.6 L 456.8 269.6 L 472.1 266.7 L 488.3 267.2 L 500.2 267.8 L 513.6 255.3 L 528.2 243.4 L 540.6 232.1 L 544.3 238.3 L 546.9 252.9 L 536.9 253.0 L 535.3 265.0 L 538.8 267.6 L 529.9 271.2 L 529.9 278.8 L 524.2 286.4 L 523.7 293.8 L 519.7 297.7 L 460.8 288.4 L 453.3 269.7 L 452.6 265.5 Z",
  "Pakistan": "M 914.3 27.5 L 928.8 36.2 L 934.6 50.3 L 966.8 57.8 L 947.9 73.3 L 926.1 76.1 L 896.4 71.6 L 886.8 79.5 L 893.7 95.7 L 900.5 108.2 L 916.3 117.3 L 899.6 128.0 L 899.9 141.1 L 880.9 159.7 L 868.6 178.4 L 848.1 197.8 L 825.4 196.4 L 803.8 215.7 L 816.6 224.0 L 818.9 238.2 L 829.9 247.6 L 833.8 263.4 L 790.7 263.4 L 777.6 275.7 L 763.3 271.0 L 757.4 257.7 L 742.3 243.7 L 706.2 247.2 L 674.4 247.5 L 646.8 250.1 L 654.2 228.6 L 682.5 219.1 L 680.8 210.6 L 671.5 207.6 L 670.9 191.4 L 652.2 183.2 L 644.3 172.1 L 634.6 162.4 L 667.4 171.8 L 687.0 169.0 L 698.7 171.4 L 702.7 167.4 L 716.3 169.0 L 741.8 161.3 L 742.5 145.6 L 753.4 135.1 L 768.0 135.2 L 770.1 130.0 L 785.1 127.6 L 792.3 129.3 L 800.0 124.1 L 798.9 113.0 L 807.2 101.9 L 819.7 97.2 L 812.0 85.0 L 830.6 85.6 L 836.0 78.9 L 835.2 71.8 L 844.9 64.1 L 842.7 54.9 L 838.1 47.1 L 849.5 39.0 L 870.5 35.2 L 893.0 33.0 L 902.9 29.6 L 914.3 27.5 Z",
  "Oman": "M 595.2 323.3 L 587.9 335.9 L 579.0 335.0 L 574.9 339.4 L 571.8 348.7 L 574.2 361.1 L 572.3 363.3 L 563.3 363.3 L 551.1 370.2 L 549.2 379.2 L 544.7 383.1 L 532.5 382.9 L 524.9 387.6 L 525.0 395.0 L 515.5 400.1 L 504.7 398.4 L 491.6 404.6 L 482.5 405.7 L 476.2 392.8 L 460.8 362.3 L 519.6 343.8 L 532.6 306.9 L 523.7 293.8 L 524.2 286.4 L 529.9 278.8 L 529.9 271.2 L 538.8 267.6 L 535.3 265.0 L 536.9 253.0 L 546.9 252.9 L 555.7 265.5 L 566.7 272.2 L 581.0 274.7 L 592.6 278.0 L 601.5 288.6 L 606.7 294.7 L 613.7 297.1 L 613.7 301.2 L 606.6 312.2 L 603.4 317.4 L 595.2 323.3 Z M 546.8 235.0 L 544.3 238.3 L 540.6 232.1 L 546.3 225.8 L 548.7 227.4 L 546.8 235.0 Z",
  "Qatar": "M 437.5 256.1 L 436.2 242.6 L 441.5 232.9 L 446.9 231.0 L 452.8 236.7 L 453.1 247.6 L 448.9 258.4 L 443.5 259.7 L 437.5 256.1 Z",
  "Kuwait": "M 382.0 159.7 L 386.1 167.8 L 384.3 172.0 L 390.6 186.0 L 376.8 186.4 L 371.9 177.6 L 354.5 175.9 L 368.8 158.1 L 382.0 159.7 Z",
  "Yemen": "M 482.5 405.7 L 468.4 410.6 L 464.6 418.8 L 464.1 425.1 L 444.6 432.9 L 413.3 441.5 L 395.8 454.6 L 387.2 455.6 L 381.3 454.5 L 369.9 462.1 L 357.4 465.7 L 340.9 466.7 L 336.0 467.7 L 331.7 472.6 L 326.6 473.9 L 323.5 478.6 L 313.9 478.2 L 307.6 480.7 L 294.0 479.8 L 288.9 469.0 L 289.5 458.9 L 286.3 453.5 L 282.5 439.8 L 276.8 432.2 L 280.8 431.3 L 278.8 422.9 L 281.1 419.3 L 280.3 411.3 L 288.9 405.4 L 286.9 397.6 L 292.0 388.5 L 300.1 393.3 L 305.4 391.7 L 328.0 391.2 L 331.6 393.1 L 350.5 394.9 L 358.0 394.0 L 362.9 400.2 L 372.1 397.1 L 386.1 377.7 L 404.4 369.4 L 460.8 362.3 L 476.2 392.8 L 482.5 405.7 Z",
  "Jordan": "M 138.6 115.0 L 142.0 109.2 L 163.8 116.5 L 202.2 96.9 L 210.1 119.3 L 206.3 122.1 L 167.1 131.4 L 186.6 149.8 L 180.2 153.0 L 176.9 159.2 L 162.0 161.7 L 157.3 168.4 L 148.9 174.0 L 127.1 171.1 L 126.4 168.4 L 136.2 138.9 L 135.7 131.7 L 138.6 126.3 L 138.6 115.0 Z",
  "Iraq": "M 332.0 48.9 L 344.8 54.4 L 346.3 65.2 L 336.4 71.6 L 331.9 86.0 L 345.5 103.5 L 369.5 113.6 L 379.5 127.7 L 376.3 141.0 L 382.6 141.0 L 382.8 150.9 L 393.6 160.6 L 382.0 159.7 L 368.8 158.1 L 354.5 175.9 L 318.1 174.4 L 262.8 137.3 L 233.7 124.3 L 210.1 119.3 L 202.2 96.9 L 245.5 77.6 L 252.9 55.3 L 251.1 41.8 L 261.8 37.3 L 271.8 25.8 L 280.3 22.9 L 303.0 25.3 L 309.9 30.0 L 319.3 26.9 L 332.0 48.9 Z",
  "Iran": "M 498.5 26.3 L 515.7 22.8 L 529.6 12.2 L 542.7 12.7 L 551.3 9.3 L 565.2 11.0 L 586.9 20.4 L 602.5 22.4 L 624.9 38.7 L 639.5 39.4 L 641.2 54.9 L 633.2 77.9 L 627.8 91.4 L 636.4 94.1 L 628.0 104.2 L 634.4 118.9 L 635.9 130.7 L 650.8 133.8 L 652.4 145.6 L 634.6 162.4 L 644.3 172.1 L 652.2 183.2 L 670.9 191.4 L 671.5 207.6 L 680.8 210.6 L 682.5 219.1 L 654.2 228.6 L 646.8 250.1 L 610.0 244.5 L 588.6 240.3 L 566.5 237.9 L 558.2 215.2 L 548.8 212.0 L 533.8 215.3 L 514.0 224.2 L 490.1 218.1 L 470.3 203.9 L 451.4 198.6 L 438.4 181.1 L 423.9 156.5 L 413.4 159.5 L 400.9 153.4 L 393.6 160.6 L 382.8 150.9 L 382.6 141.0 L 376.3 141.0 L 379.5 127.7 L 369.5 113.6 L 345.5 103.5 L 331.9 86.0 L 336.4 71.6 L 346.3 65.2 L 344.8 54.4 L 332.0 48.9 L 319.3 26.9 L 308.6 12.1 L 312.4 6.3 L 306.3 -14.8 L 319.7 -20.1 L 322.8 -13.1 L 332.7 -4.6 L 346.1 -2.1 L 353.2 -2.7 L 376.3 -16.3 L 383.7 -17.7 L 389.5 -12.3 L 382.7 -3.1 L 394.9 6.5 L 399.8 5.6 L 406.0 19.2 L 424.6 23.1 L 438.2 32.3 L 466.0 35.5 L 496.6 30.6 L 498.5 26.3 Z",
  "Afghanistan": "M 641.2 54.9 L 661.2 61.9 L 675.9 59.5 L 680.0 51.1 L 695.5 48.3 L 706.5 42.7 L 710.4 27.9 L 727.0 24.4 L 730.0 17.8 L 739.3 22.7 L 745.2 23.3 L 756.1 23.4 L 770.8 27.3 L 776.8 29.6 L 791.0 23.6 L 797.6 27.2 L 803.9 18.8 L 815.6 19.1 L 818.6 16.4 L 820.7 9.0 L 829.1 2.6 L 839.7 6.8 L 837.6 12.4 L 843.5 13.3 L 841.7 28.8 L 849.5 34.8 L 856.3 31.0 L 865.0 29.1 L 877.2 20.9 L 890.7 22.2 L 910.9 22.2 L 914.3 27.5 L 902.9 29.6 L 893.0 33.0 L 870.5 35.2 L 849.5 39.0 L 838.1 47.1 L 842.7 54.9 L 844.9 64.1 L 835.2 71.8 L 836.0 78.9 L 830.6 85.6 L 812.0 85.0 L 819.7 97.2 L 807.2 101.9 L 798.9 113.0 L 800.0 124.1 L 792.3 129.3 L 785.1 127.6 L 770.1 130.0 L 768.0 135.2 L 753.4 135.1 L 742.5 145.6 L 741.8 161.3 L 716.3 169.0 L 702.7 167.4 L 698.7 171.4 L 687.0 169.0 L 667.4 171.8 L 634.6 162.4 L 652.4 145.6 L 650.8 133.8 L 635.9 130.7 L 634.4 118.9 L 628.0 104.2 L 636.4 94.1 L 627.8 91.4 L 633.2 77.9 L 641.2 54.9 Z",
  "Egypt": "M 126.4 168.4 L 120.9 175.9 L 116.7 189.8 L 111.4 199.4 L 106.8 202.6 L 100.3 196.7 L 91.4 188.4 L 77.5 162.0 L 75.4 163.7 L 83.6 183.1 L 95.6 201.7 L 110.4 230.5 L 117.6 240.5 L 123.9 250.9 L 141.5 271.4 L 137.6 274.6 L 138.2 286.6 L 161.0 303.1 L 164.5 306.9 L 86.8 306.9 L 10.8 306.9 L -67.9 306.9 L -67.9 238.9 L -67.9 173.3 L -73.8 158.4 L -68.7 147.0 L -71.8 139.1 L -64.7 130.3 L -38.6 130.0 L -19.8 134.8 L -0.3 140.3 L 8.7 143.2 L 23.8 137.3 L 31.9 132.0 L 49.1 130.5 L 63.1 132.8 L 68.4 142.0 L 72.9 136.0 L 88.6 140.3 L 103.9 141.4 L 113.5 136.7 L 126.4 168.4 Z",
  "Syria": "M 202.2 96.9 L 163.8 116.5 L 142.0 109.2 L 141.6 109.1 L 144.3 106.3 L 144.0 98.7 L 148.8 88.6 L 159.5 81.7 L 156.3 74.4 L 147.5 73.5 L 145.6 59.4 L 150.4 51.8 L 155.7 47.7 L 160.9 43.7 L 162.0 33.4 L 168.4 37.0 L 190.0 31.8 L 200.4 35.3 L 216.5 35.2 L 239.0 28.3 L 249.6 28.6 L 271.8 25.8 L 261.8 37.3 L 251.1 41.8 L 252.9 55.3 L 245.5 77.6 L 202.2 96.9 Z"
};

// Bahrain island vector coordinates
const bahrainIslandPath = "M 431.5 224 L 434.5 224.5 L 435.5 233 L 432.5 235 L 430.5 228 Z M 435.5 221 L 438 221.5 L 437 225 L 434.5 225 Z";

export default function ContactUsView() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // State management
  const [activeLocationTab, setActiveLocationTab] = useState('all');
  const [selectedLocationId, setSelectedLocationId] = useState('riyadh');
  const [mapMode, setMapMode] = useState('vector'); // 'vector' or 'interactive'
  const [activeMapEmbed, setActiveMapEmbed] = useState('riyadh');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Enterprise ERP Implementation',
    budget: '$15k - $50k',
    subject: '',
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Live Clocks for Timezones
  const [times, setTimes] = useState({
    ksa: '--:-- --',
    uae: '--:-- --',
    pk: '--:-- --'
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const options = { hour: '2-digit', minute: '2-digit', hour12: true };
      
      try {
        const ksaTime = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Asia/Riyadh' }).format(now);
        const uaeTime = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Asia/Dubai' }).format(now);
        const pkTime = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Asia/Karachi' }).format(now);
        setTimes({ ksa: ksaTime, uae: uaeTime, pk: pkTime });
      } catch (e) {
        setTimes({ ksa: 'GMT+3 (AST)', uae: 'GMT+4 (GST)', pk: 'GMT+5 (PKT)' });
      }
    };

    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@altapetesolutions.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  // Geographic Locations with Authentic Coordinates & Smart Separated Badge Offsets
  const locations = [
    {
      id: 'riyadh',
      city: 'Riyadh',
      country: 'Saudi Arabia',
      countryCode: 'SA',
      flag: '🇸🇦',
      regionTag: 'Central Province',
      type: 'Executive Headquarters',
      isHQ: true,
      address: 'Building #44, Ibn Katheer Street, King Abdulaziz District, Riyadh',
      postalCode: '12411 Riyadh, KSA',
      phone: '+966 53 382 0454',
      altPhone: '+966 55 101 3823',
      email: 'riyadh@altapetesolutions.com',
      hours: 'Sun - Thu: 9:00 AM - 6:00 PM (AST)',
      timeZoneLabel: 'Arabia Standard Time (GMT+3)',
      currentTimeKey: 'ksa',
      lat: 24.7136,
      lng: 46.6753,
      pinX: 356.6,
      pinY: 256.8,
      badgeX: 356.6,
      badgeY: 185,
      lineX2: 356.6,
      lineY2: 202,
      subTag: 'Corporate HQ',
      focus: 'Executive Leadership, Strategic ERP Consulting, ZATCA Phase 2 Advisory & Oracle Practice',
      gmapUrl: 'https://maps.google.com/?q=Ibn+Katheer+Street+King+Abdulaziz+District+Riyadh'
    },
    {
      id: 'khobar',
      city: 'Al Khobar',
      country: 'Saudi Arabia',
      countryCode: 'SA',
      flag: '🇸🇦',
      regionTag: 'Eastern Province',
      type: 'Industrial & Commercial Hub',
      isHQ: false,
      address: 'Office# 09, 4th Floor, King Khalid Street Cross 15, Al Khobar',
      postalCode: '34414 Al Khobar, KSA',
      phone: '+966 55 101 3823',
      altPhone: '+966 56 802 9153',
      email: 'khobar@altapetesolutions.com',
      hours: 'Sun - Thu: 9:00 AM - 6:00 PM (AST)',
      timeZoneLabel: 'Arabia Standard Time (GMT+3)',
      currentTimeKey: 'ksa',
      lat: 26.2794,
      lng: 50.2083,
      pinX: 425.7,
      pinY: 227.9,
      badgeX: 315,
      badgeY: 125,
      lineX2: 355,
      lineY2: 139,
      subTag: 'Eastern Hub',
      focus: 'Oil & Gas Solutions, Industrial ERP Implementation, Logistics & Supply Chain Automation',
      gmapUrl: 'https://maps.google.com/?q=King+Khalid+Street+Cross+15+Al+Khobar'
    },
    {
      id: 'manama',
      city: 'Manama',
      country: 'Bahrain',
      countryCode: 'BH',
      flag: '🇧🇭',
      regionTag: 'GCC Financial Gateway',
      type: 'Regional Financial Advisory Desk',
      isHQ: false,
      address: 'Diplomatic Area, Bahrain Financial Harbour Corridor, Manama',
      postalCode: 'Manama, Kingdom of Bahrain',
      phone: '+966 55 101 3823',
      altPhone: '+966 56 802 9153',
      email: 'bahrain@altapetesolutions.com',
      hours: 'Sun - Thu: 8:30 AM - 5:30 PM (AST)',
      timeZoneLabel: 'Arabia Standard Time (GMT+3)',
      currentTimeKey: 'ksa',
      lat: 26.2285,
      lng: 50.5860,
      pinX: 433.1,
      pinY: 228.9,
      badgeX: 490,
      badgeY: 125,
      lineX2: 450,
      lineY2: 139,
      subTag: 'Financial Desk',
      focus: 'Financial Institutions ERP, Zakat & Corporate Advisory, Cloud Systems',
      gmapUrl: 'https://maps.google.com/?q=Diplomatic+Area+Manama+Bahrain'
    },
    {
      id: 'dubai',
      city: 'Dubai',
      country: 'United Arab Emirates',
      countryCode: 'AE',
      flag: '🇦🇪',
      regionTag: 'Gulf Operations',
      type: 'Regional Enterprise Hub',
      isHQ: false,
      address: 'Business Bay / Downtown Corporate Corridor, Dubai',
      postalCode: 'Dubai, United Arab Emirates',
      phone: '+966 55 101 3823',
      altPhone: '+966 56 802 9153',
      email: 'uae@altapetesolutions.com',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM (GST)',
      timeZoneLabel: 'Gulf Standard Time (GMT+4)',
      currentTimeKey: 'uae',
      lat: 25.2048,
      lng: 55.2708,
      pinX: 524.9,
      pinY: 247.8,
      badgeX: 630,
      badgeY: 200,
      lineX2: 575,
      lineY2: 212,
      subTag: 'Gulf Operations',
      focus: 'FinTech Integrations, Cross-Border GCC Cloud Architectures & Corporate Systems',
      gmapUrl: 'https://maps.google.com/?q=Business+Bay+Dubai+UAE'
    },
    {
      id: 'abudhabi',
      city: 'Abu Dhabi',
      country: 'United Arab Emirates',
      countryCode: 'AE',
      flag: '🇦🇪',
      regionTag: 'Capital Hub',
      type: 'Enterprise Liaison Desk',
      isHQ: false,
      address: 'Al Maryah Island / Capital Business Zone, Abu Dhabi',
      postalCode: 'Abu Dhabi, United Arab Emirates',
      phone: '+966 55 101 3823',
      altPhone: '+966 56 802 9153',
      email: 'abudhabi@altapetesolutions.com',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM (GST)',
      timeZoneLabel: 'Gulf Standard Time (GMT+4)',
      currentTimeKey: 'uae',
      lat: 24.4539,
      lng: 54.3773,
      pinX: 507.4,
      pinY: 261.6,
      badgeX: 605,
      badgeY: 315,
      lineX2: 555,
      lineY2: 303,
      subTag: 'Capital Advisory',
      focus: 'Government & Enterprise Modernization, SAP S/4HANA Strategic Transformations',
      gmapUrl: 'https://maps.google.com/?q=Abu+Dhabi+UAE'
    },
    {
      id: 'jeddah',
      city: 'Jeddah',
      country: 'Saudi Arabia',
      countryCode: 'SA',
      flag: '🇸🇦',
      regionTag: 'Western Province',
      type: 'Commercial & Logistics Desk',
      isHQ: false,
      address: 'King Abdulaziz Road / Al Andalus Business District, Jeddah',
      postalCode: '21589 Jeddah, KSA',
      phone: '+966 53 382 0454',
      altPhone: '+966 55 101 3823',
      email: 'jeddah@altapetesolutions.com',
      hours: 'Sun - Thu: 9:00 AM - 6:00 PM (AST)',
      timeZoneLabel: 'Arabia Standard Time (GMT+3)',
      currentTimeKey: 'ksa',
      lat: 21.5433,
      lng: 39.1728,
      pinX: 209.6,
      pinY: 315.4,
      badgeX: 135,
      badgeY: 385,
      lineX2: 175,
      lineY2: 373,
      subTag: 'Western Desk',
      focus: 'Western Province Retail, Port Logistics, Hospitality & Real Estate ERP',
      gmapUrl: 'https://maps.google.com/?q=King+Abdulaziz+Road+Jeddah'
    },
    {
      id: 'lahore',
      city: 'Lahore',
      country: 'Pakistan',
      countryCode: 'PK',
      flag: '🇵🇰',
      regionTag: 'South Asia Center',
      type: 'Global Technology & Engineering Center',
      isHQ: false,
      address: '159-D Nawab Town, Raiwind Road / Thokar Niaz Baig, Lahore',
      postalCode: '54000 Lahore, Punjab, PK',
      phone: '+92 370 3536327',
      altPhone: '+966 56 802 9153',
      email: 'tech@altapetesolutions.com',
      hours: 'Mon - Fri: 9:00 AM - 6:30 PM (PKT)',
      timeZoneLabel: 'Pakistan Standard Time (GMT+5)',
      currentTimeKey: 'pk',
      lat: 31.5204,
      lng: 74.3587,
      pinX: 898.7,
      pinY: 131.2,
      badgeX: 805,
      badgeY: 65,
      lineX2: 855,
      lineY2: 77,
      subTag: 'Tech & R&D Center',
      focus: 'Core ERP Development, Odoo Custom Modules, Cloud Microservices, Full-Stack Software Engineering',
      gmapUrl: 'https://maps.google.com/?q=159-D+Nawab+Town+Lahore'
    }
  ];

  const filteredLocations = activeLocationTab === 'all'
    ? locations
    : locations.filter(loc => loc.countryCode.toLowerCase() === activeLocationTab.toLowerCase());

  const selectedLocation = locations.find(loc => loc.id === selectedLocationId) || locations[0];

  const faqs = [
    {
      q: 'What is Altapete’s typical response time for RFPs and consultations?',
      a: 'We operate under a strict Service Level Agreement (SLA): all submitted RFPs, contact inquiries, and meeting requests receive an official technical review and response within one business day (under 24 hours). For urgent matters, our direct WhatsApp and phone lines are monitored continuously.'
    },
    {
      q: 'Can Altapete execute a Non-Disclosure Agreement (NDA) before we share technical specifications?',
      a: 'Yes, absolutely. We prioritize enterprise confidentiality. We routinely sign bilateral mutual NDAs or your corporate confidentiality agreement before reviewing architecture schematics, database exports, or proprietary business processes.'
    },
    {
      q: 'Do you deploy on-site consultants in Saudi Arabia and the GCC?',
      a: 'Yes. Our senior solution architects, ERP functional consultants, and ZATCA compliance specialists provide dedicated on-site consulting across Riyadh, Al Khobar, Jeddah, Dubai, Abu Dhabi, and Manama, backed by our offshore engineering center in Lahore.'
    },
    {
      q: 'How are enterprise implementations structured and billed?',
      a: 'We offer flexible engagement models tailored to project scope: Milestone-based Fixed Cost for defined ERP migrations (Oracle, SAP, Odoo, ZATCA Phase 2), Dedicated Agile Sprints for continuous software engineering, and Time & Material retained advisory for ongoing corporate and tax compliance.'
    },
    {
      q: 'Which enterprise ERP and software platforms do you specialize in?',
      a: 'Our certified engineering practices cover Oracle Fusion Cloud, Oracle E-Business Suite (EBS), SAP S/4HANA & ECC, Odoo ERP (Enterprise & Community), Microsoft Dynamics 365, ZATCA Phase 2 E-Invoicing integrations, and custom full-stack web/mobile cloud architectures.'
    },
    {
      q: 'How does the free initial discovery session work?',
      a: 'During our complimentary 30-minute discovery call, a Principal Enterprise Architect assesses your current system landscape, identifies operational bottlenecks or regulatory mandates (e.g. ZATCA/e-invoicing), and presents a high-level roadmap with budget and timeline parameters.'
    }
  ];

  return (
    <div className={`contact-page-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      
      {/* SECTION 1: HERO */}
      <section className="contact-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-9 col-lg-10">
              
              <div className="hero-eyebrow-badge">
                <span className="live-status-dot"></span>
                <span className="eyebrow-text">GLOBAL ERP &amp; CLOUD ADVISORY • ACTIVE ON-CALL</span>
              </div>

              <h1 className="hero-headline">
                Connect With Our <span className="text-gradient">Enterprise Architects</span> &amp; Global Teams
              </h1>

              <p className="hero-subheadline">
                From end-to-end ERP implementations and ZATCA Phase 2 compliance to high-scale custom software engineering —
                our cross-border specialists in Saudi Arabia, UAE, Bahrain, and Pakistan are ready to accelerate your transformation.
              </p>

              <div className="hero-pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-icon"><Clock size={16} /></div>
                  <div className="pillar-text">
                    <strong>&lt; 24h Response</strong>
                    <span>Guaranteed SLA turnaround</span>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon"><ShieldCheck size={16} /></div>
                  <div className="pillar-text">
                    <strong>100% NDA Protected</strong>
                    <span>Full enterprise privacy</span>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon"><Globe2 size={16} /></div>
                  <div className="pillar-text">
                    <strong>4 GCC &amp; SA Hubs</strong>
                    <span>KSA • UAE • BH • PK</span>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon"><Building2 size={16} /></div>
                  <div className="pillar-text">
                    <strong>Certified Partners</strong>
                    <span>Oracle, SAP &amp; Odoo</span>
                  </div>
                </div>
              </div>

              <div className="hero-action-buttons">
                <a href="#inquiry-form" className="btn btn-linear hover-up">
                  <span>Submit RFP / Project Scope</span>
                  <ArrowRight size={16} />
                </a>
                <a href="#geographic-map" className="btn btn-outline-brand hover-up">
                  <Compass size={16} />
                  <span>Explore Regional Offices</span>
                </a>
                <a 
                  href="https://wa.me/966568029153?text=Hello%20Altapete%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20ERP%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp hover-up"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Direct</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CHANNELS */}
      <section className="channels-section">
        <div className="container">
          <div className="row g-4">
            
            <div className="col-lg-3 col-md-6 col-12">
              <div className="contact-tile">
                <div className="tile-header">
                  <div className="tile-icon-box phone-icon"><Phone size={20} /></div>
                  <span className="tile-badge">Voice Desk</span>
                </div>
                <h3 className="tile-title">Direct Calling</h3>
                <p className="tile-desc">Speak immediately with our regional country directors.</p>
                <div className="tile-action-list">
                  <a href="tel:+966533820454" className="channel-link">
                    <div className="channel-link-main">
                      <span className="channel-flag">🇸🇦</span>
                      <span className="channel-number">+966 53 382 0454</span>
                    </div>
                    <span className="channel-tag">Riyadh HQ</span>
                  </a>
                  <a href="tel:+966551013823" className="channel-link">
                    <div className="channel-link-main">
                      <span className="channel-flag">🇸🇦</span>
                      <span className="channel-number">+966 55 101 3823</span>
                    </div>
                    <span className="channel-tag">Eastern Prov.</span>
                  </a>
                  <a href="tel:+923703536327" className="channel-link">
                    <div className="channel-link-main">
                      <span className="channel-flag">🇵🇰</span>
                      <span className="channel-number">+92 370 3536327</span>
                    </div>
                    <span className="channel-tag">Tech Desk</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="contact-tile featured-tile">
                <div className="tile-header">
                  <div className="tile-icon-box whatsapp-icon"><MessageSquare size={20} /></div>
                  <span className="tile-badge active-badge">Instant Connect</span>
                </div>
                <h3 className="tile-title">WhatsApp Direct</h3>
                <p className="tile-desc">Fast-track response for executive proposals &amp; urgent briefs.</p>
                <div className="whatsapp-info-box">
                  <span className="wa-num">+966 56 802 9153</span>
                  <span className="wa-sub">Official Altapete Business Desk</span>
                </div>
                <a 
                  href="https://wa.me/966568029153?text=Hello%20Altapete,%20we%20have%20an%20urgent%20ERP%20consulting%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tile-action-btn wa-btn hover-up"
                >
                  <MessageSquare size={16} />
                  <span>Start WhatsApp Chat</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="contact-tile">
                <div className="tile-header">
                  <div className="tile-icon-box mail-icon"><Mail size={20} /></div>
                  <span className="tile-badge">Official Mailbox</span>
                </div>
                <h3 className="tile-title">Email &amp; RFPs</h3>
                <p className="tile-desc">Submit comprehensive RFPs, scopes of work, and formal tenders.</p>
                <div className="email-address-box">
                  <span className="email-text">info@altapetesolutions.com</span>
                </div>
                <div className="tile-btn-group">
                  <a href="mailto:info@altapetesolutions.com" className="tile-action-btn mail-btn hover-up">
                    <Mail size={15} />
                    <span>Send Email</span>
                  </a>
                  <button onClick={handleCopyEmail} className="tile-copy-btn" title="Copy Email Address">
                    {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  </button>
                </div>
                <span className="tile-note">Reviewed by Senior Partners</span>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="contact-tile">
                <div className="tile-header">
                  <div className="tile-icon-box calendar-icon"><Calendar size={20} /></div>
                  <span className="tile-badge">Executive Advisory</span>
                </div>
                <h3 className="tile-title">Strategy Session</h3>
                <p className="tile-desc">Book a complimentary 30-min discovery session with an ERP Director.</p>
                <div className="discovery-perks">
                  <div className="perk"><Check size={13} color="#2c73d9" /> Technical Architecture Audit</div>
                  <div className="perk"><Check size={13} color="#2c73d9" /> Budget &amp; Milestone Estimates</div>
                </div>
                <a href="#inquiry-form" className="tile-action-btn calendar-btn hover-up">
                  <Sparkles size={15} />
                  <span>Request Strategy Call</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: PROFESSIONAL GEOGRAPHIC MAP */}
      <section id="geographic-map" className="geo-section">
        <div className="container">
          
          <div className="section-head text-center">
            <div className="section-badge">
              <Globe2 size={13} />
              <span>GEOGRAPHIC FOOTPRINT &amp; REGIONAL INFRASTRUCTURE</span>
            </div>
            <h2 className="section-title">
              Our Regional <span className="text-gradient">Operations Map</span>
            </h2>
            <p className="section-subtitle">
              Authentic geographical presence across the Kingdom of Saudi Arabia, United Arab Emirates, Bahrain, and Pakistan.
              Hover or click on any office beacon to view complete details.
            </p>
          </div>

          <div className="geo-controls-row">
            
            <div className="geo-country-tabs">
              {[
                { id: 'all', label: 'All Hubs', count: locations.length, icon: Globe2 },
                { id: 'sa', label: 'Saudi Arabia', count: 3, flag: '🇸🇦' },
                { id: 'ae', label: 'United Arab Emirates', count: 2, flag: '🇦🇪' },
                { id: 'bh', label: 'Bahrain', count: 1, flag: '🇧🇭' },
                { id: 'pk', label: 'Pakistan', count: 2, flag: '🇵🇰' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveLocationTab(tab.id)}
                  className={`country-tab-btn ${activeLocationTab === tab.id ? 'active' : ''}`}
                >
                  {tab.flag && <span className="tab-flag">{tab.flag}</span>}
                  {tab.icon && <tab.icon size={15} className="tab-icon" />}
                  <span className="tab-label">{tab.label}</span>
                  <span className="tab-count">{tab.count}</span>
                </button>
              ))}
            </div>

            <div className="map-view-toggle">
              <button
                onClick={() => setMapMode('vector')}
                className={`toggle-pill-btn ${mapMode === 'vector' ? 'active' : ''}`}
              >
                <Compass size={14} />
                <span>Tactical Vector Map</span>
              </button>
              <button
                onClick={() => setMapMode('interactive')}
                className={`toggle-pill-btn ${mapMode === 'interactive' ? 'active' : ''}`}
              >
                <Eye size={14} />
                <span>Live Satellite &amp; Street View</span>
              </button>
            </div>

          </div>

          <div className="geo-visualizer-container">
            <div className="row g-4 align-items-stretch">
              
              <div className="col-xl-8 col-lg-7">
                <div className="map-card-wrapper">
                  
                  <div className="map-hud-bar">
                    <div className="hud-status">
                      <span className="hud-radar-pulse"></span>
                      <span className="hud-text">ENTERPRISE GEOGRAPHIC NETWORK • REGIONAL TOPOLOGY</span>
                    </div>
                    <div className="hud-clocks">
                      <div className="hud-clock-item">
                        <span className="clock-city">🇸🇦 KSA / 🇧🇭 BH:</span>
                        <span className="clock-time">{times.ksa}</span>
                      </div>
                      <div className="hud-clock-item">
                        <span className="clock-city">🇦🇪 UAE:</span>
                        <span className="clock-time">{times.uae}</span>
                      </div>
                      <div className="hud-clock-item">
                        <span className="clock-city">🇵🇰 PK:</span>
                        <span className="clock-time">{times.pk}</span>
                      </div>
                    </div>
                  </div>

                  {mapMode === 'vector' ? (
                    <div className="map-svg-viewport">
                      <svg
                        viewBox="0 0 1000 540"
                        className="regional-vector-map"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <defs>
                          <radialGradient id="hqRadialGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
                            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.18" />
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                          </radialGradient>

                          <radialGradient id="techRadialGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.75" />
                            <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                          </radialGradient>

                          <linearGradient id="networkTrunkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2c73d9" stopOpacity="0.7" />
                            <stop offset="50%" stopColor="#00d2ff" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
                          </linearGradient>

                          <pattern id="precisionGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
                          </pattern>
                        </defs>

                        <rect width="1000" height="540" fill="url(#precisionGrid)" />

                        <g className="graticule-lines" opacity={isDark ? '0.15' : '0.25'}>
                          <line x1="30" y1="120" x2="970" y2="120" stroke="currentColor" strokeDasharray="2,6" />
                          <line x1="30" y1="240" x2="970" y2="240" stroke="currentColor" strokeDasharray="2,6" />
                          <line x1="30" y1="360" x2="970" y2="360" stroke="currentColor" strokeDasharray="2,6" />
                          <line x1="480" y1="30" x2="480" y2="510" stroke="currentColor" strokeDasharray="2,6" />
                          <line x1="250" y1="30" x2="250" y2="510" stroke="currentColor" strokeDasharray="2,6" />
                          <line x1="720" y1="30" x2="720" y2="510" stroke="currentColor" strokeDasharray="2,6" />
                        </g>

                        {/* Surrounding Context Countries */}
                        <g className="geo-context-countries">
                          {['Oman', 'Qatar', 'Kuwait', 'Jordan', 'Egypt', 'Iraq', 'Iran', 'Afghanistan', 'Yemen', 'Syria'].map((cName) => (
                            <path
                              key={cName}
                              d={geoCountryPaths[cName] || ''}
                              fill={isDark ? 'rgba(255, 255, 255, 0.015)' : 'rgba(0, 0, 0, 0.015)'}
                              stroke={isDark ? 'rgba(148, 163, 184, 0.22)' : 'rgba(100, 116, 139, 0.28)'}
                              strokeWidth="0.9"
                              strokeDasharray="3,3"
                            />
                          ))}
                        </g>

                        {/* Core Operational Focus Countries */}
                        <g className="geo-operational-countries">
                          <path
                            d={geoCountryPaths['Saudi Arabia'] || ''}
                            fill={isDark ? 'rgba(44, 115, 217, 0.14)' : 'rgba(44, 115, 217, 0.09)'}
                            stroke="#2c73d9"
                            strokeWidth="1.6"
                            className="country-glow-sa"
                          />

                          <path
                            d={geoCountryPaths['United Arab Emirates'] || ''}
                            fill={isDark ? 'rgba(44, 115, 217, 0.18)' : 'rgba(44, 115, 217, 0.12)'}
                            stroke="#2c73d9"
                            strokeWidth="1.6"
                          />

                          <path
                            d={geoCountryPaths['Pakistan'] || ''}
                            fill={isDark ? 'rgba(139, 92, 246, 0.14)' : 'rgba(139, 92, 246, 0.09)'}
                            stroke="#8b5cf6"
                            strokeWidth="1.6"
                          />

                          <path
                            d={bahrainIslandPath}
                            fill="#2c73d9"
                            stroke="#00d2ff"
                            strokeWidth="1.5"
                          />
                        </g>

                        {/* Water Labels */}
                        <g className="water-labels" opacity={isDark ? '0.35' : '0.5'}>
                          <text x="120" y="270" fill="currentColor" fontSize="10.5" fontStyle="italic" letterSpacing="1.8">RED SEA</text>
                          <text x="460" y="225" fill="#00d2ff" fontSize="10" fontStyle="italic" letterSpacing="1.6">ARABIAN GULF</text>
                          <text x="560" y="430" fill="currentColor" fontSize="11" fontStyle="italic" letterSpacing="2">ARABIAN SEA</text>
                          <text x="560" y="275" fill="currentColor" fontSize="9.5" fontStyle="italic" letterSpacing="1.2">GULF OF OMAN</text>
                        </g>

                        {/* Country Watermarks */}
                        <g className="country-watermarks" opacity={isDark ? '0.4' : '0.55'}>
                          <text x="280" y="300" fill="currentColor" fontSize="12" fontWeight="700" letterSpacing="2.5">SAUDI ARABIA</text>
                          <text x="800" y="200" fill="currentColor" fontSize="12" fontWeight="700" letterSpacing="2.5">PAKISTAN</text>
                          <text x="520" y="280" fill="currentColor" fontSize="8.5" fontWeight="700" letterSpacing="1">UAE</text>
                        </g>

                        {/* Inter-Office Sync Arcs */}
                        <g className="geo-sync-arcs">
                          <path d="M 356.6 256.8 Q 391 235 425.7 227.9" fill="none" stroke="url(#networkTrunkGrad)" strokeWidth="1.8" strokeDasharray="4,4" className="sync-pulse-line" />
                          <path d="M 356.6 256.8 Q 280 295 209.6 315.4" fill="none" stroke="url(#networkTrunkGrad)" strokeWidth="1.5" strokeDasharray="4,4" className="sync-pulse-line" />
                          <path d="M 356.6 256.8 Q 440 240 524.9 247.8" fill="none" stroke="url(#networkTrunkGrad)" strokeWidth="1.8" strokeDasharray="4,4" className="sync-pulse-line" />
                          <path d="M 524.9 247.8 Q 515 255 507.4 261.6" fill="none" stroke="url(#networkTrunkGrad)" strokeWidth="1.4" strokeDasharray="3,3" />
                          <path d="M 425.7 227.9 L 433.1 228.9" fill="none" stroke="#f59e0b" strokeWidth="2" />
                          <path d="M 356.6 256.8 Q 630 115 898.7 131.2" fill="none" stroke="url(#networkTrunkGrad)" strokeWidth="2.5" strokeDasharray="6,4" className="sync-pulse-line-fast" />
                          <path d="M 524.9 247.8 Q 640 235 754.6 254.1" fill="none" stroke="url(#networkTrunkGrad)" strokeWidth="1.8" strokeDasharray="4,4" className="sync-pulse-line" />
                          <path d="M 754.6 254.1 Q 830 200 898.7 131.2" fill="none" stroke="url(#networkTrunkGrad)" strokeWidth="1.8" strokeDasharray="4,4" className="sync-pulse-line" />
                        </g>

                        {/* Leader Lines */}
                        <g className="badge-leader-lines">
                          {locations.map((loc) => {
                            const isSelected = selectedLocationId === loc.id;
                            const strokeColor = isSelected ? (loc.isHQ ? '#f59e0b' : '#2c73d9') : (isDark ? 'rgba(148, 163, 184, 0.5)' : 'rgba(100, 116, 139, 0.6)');
                            return (
                              <g key={`leader-${loc.id}`}>
                                <line
                                  x1={loc.pinX}
                                  y1={loc.pinY}
                                  x2={loc.lineX2}
                                  y2={loc.lineY2}
                                  stroke={strokeColor}
                                  strokeWidth={isSelected ? '1.8' : '1.2'}
                                  strokeDasharray="2,3"
                                />
                                <circle cx={loc.lineX2} cy={loc.lineY2} r="2" fill={strokeColor} />
                              </g>
                            );
                          })}
                        </g>

                        {/* Coordinate Pins */}
                        <g className="location-pins">
                          {locations.map((loc) => {
                            const isSelected = selectedLocationId === loc.id;
                            const isMatched = activeLocationTab === 'all' || loc.countryCode.toLowerCase() === activeLocationTab.toLowerCase();
                            const pinOpacity = isMatched ? 1 : 0.25;

                            return (
                              <g
                                key={`pin-${loc.id}`}
                                onClick={() => setSelectedLocationId(loc.id)}
                                style={{ cursor: 'pointer', opacity: pinOpacity, transition: 'all 0.3s ease' }}
                              >
                                {loc.isHQ && (
                                  <circle cx={loc.pinX} cy={loc.pinY} r="26" fill="url(#hqRadialGlow)" className="radar-ripple-pulse" />
                                )}
                                {loc.id === 'lahore' && (
                                  <circle cx={loc.pinX} cy={loc.pinY} r="24" fill="url(#techRadialGlow)" className="radar-ripple-pulse" />
                                )}

                                {isSelected && (
                                  <circle
                                    cx={loc.pinX}
                                    cy={loc.pinY}
                                    r="15"
                                    fill="none"
                                    stroke={loc.isHQ ? '#f59e0b' : '#2c73d9'}
                                    strokeWidth="2"
                                    strokeDasharray="3,3"
                                    className="spin-dash-ring"
                                  />
                                )}

                                <circle
                                  cx={loc.pinX}
                                  cy={loc.pinY}
                                  r={loc.isHQ ? "8" : "6.5"}
                                  fill={loc.isHQ ? '#f59e0b' : (loc.id === 'lahore' ? '#8b5cf6' : '#2c73d9')}
                                  stroke="#ffffff"
                                  strokeWidth="2"
                                />
                                <circle cx={loc.pinX} cy={loc.pinY} r="2.5" fill="#ffffff" />
                              </g>
                            );
                          })}
                        </g>

                        {/* Zero-Collision Floating Badges */}
                        <g className="location-badges">
                          {locations.map((loc) => {
                            const isSelected = selectedLocationId === loc.id;
                            const isMatched = activeLocationTab === 'all' || loc.countryCode.toLowerCase() === activeLocationTab.toLowerCase();
                            const badgeOpacity = isMatched ? 1 : 0.3;
                            
                            const badgeW = loc.isHQ ? 165 : 145;
                            const badgeH = 28;
                            const rectX = loc.badgeX - badgeW / 2;
                            const rectY = loc.badgeY - badgeH / 2;

                            return (
                              <g
                                key={`badge-${loc.id}`}
                                onClick={() => setSelectedLocationId(loc.id)}
                                style={{ cursor: 'pointer', opacity: badgeOpacity, transition: 'all 0.3s ease' }}
                                className={`map-badge-group ${isSelected ? 'active-badge-group' : ''}`}
                              >
                                <rect
                                  x={rectX}
                                  y={rectY}
                                  width={badgeW}
                                  height={badgeH}
                                  rx="7"
                                  ry="7"
                                  fill={
                                    isSelected 
                                      ? (isDark ? 'rgba(44, 115, 217, 0.28)' : '#e0ecff') 
                                      : (isDark ? 'rgba(13, 21, 39, 0.94)' : '#ffffff')
                                  }
                                  stroke={
                                    isSelected 
                                      ? (loc.isHQ ? '#f59e0b' : '#2c73d9') 
                                      : (isDark ? 'rgba(44, 115, 217, 0.4)' : 'rgba(0, 0, 0, 0.12)')
                                  }
                                  strokeWidth={isSelected ? '1.8' : '1'}
                                  filter="drop-shadow(0 3px 8px rgba(0,0,0,0.25))"
                                />

                                <text
                                  x={rectX + 12}
                                  y={rectY + 18}
                                  fontSize="12.5"
                                  dominantBaseline="auto"
                                >
                                  {loc.flag}
                                </text>

                                <text
                                  x={rectX + 32}
                                  y={rectY + 14}
                                  fontSize="11.5"
                                  fontWeight={isSelected ? '800' : '700'}
                                  fill={
                                    isSelected 
                                      ? (loc.isHQ ? '#f59e0b' : '#2c73d9') 
                                      : (isDark ? '#f1f5f9' : '#0f172a')
                                  }
                                >
                                  {loc.city} {loc.isHQ ? '★' : ''}
                                </text>

                                <text
                                  x={rectX + 32}
                                  y={rectY + 23}
                                  fontSize="8.5"
                                  fontWeight="600"
                                  fill={isDark ? '#94a3b8' : '#64748b'}
                                >
                                  {loc.subTag}
                                </text>
                              </g>
                            );
                          })}
                        </g>

                      </svg>

                      <div className="map-corner-legend">
                        <div className="legend-item">
                          <span className="legend-marker hq-marker">★</span>
                          <span>Corporate HQ (Riyadh)</span>
                        </div>
                        <div className="legend-item">
                          <span className="legend-marker tech-marker">●</span>
                          <span>Global Tech &amp; R&amp;D Center (Lahore)</span>
                        </div>
                        <div className="legend-item">
                          <span className="legend-marker hub-marker">●</span>
                          <span>GCC Regional Operations &amp; Desks</span>
                        </div>
                      </div>

                    </div>
                  ) : (
                    <div className="interactive-mode-container">
                      <div className="interactive-tabs-bar">
                        <button
                          onClick={() => setActiveMapEmbed('riyadh')}
                          className={`subtab-btn ${activeMapEmbed === 'riyadh' ? 'active' : ''}`}
                        >
                          🇸🇦 Riyadh Executive HQ
                        </button>
                        <button
                          onClick={() => setActiveMapEmbed('khobar')}
                          className={`subtab-btn ${activeMapEmbed === 'khobar' ? 'active' : ''}`}
                        >
                          🇸🇦 Al Khobar Eastern Hub
                        </button>
                        <button
                          onClick={() => setActiveMapEmbed('lahore')}
                          className={`subtab-btn ${activeMapEmbed === 'lahore' ? 'active' : ''}`}
                        >
                          🇵🇰 Lahore Global Tech Center
                        </button>
                      </div>

                      <div className="map-iframe-container">
                        {activeMapEmbed === 'riyadh' && (
                          <iframe
                            title="Altapete Solutions Riyadh HQ Map"
                            src="https://maps.google.com/maps?q=Building%2044,%20Ibn%20Katheer%20Street,%20King%20Abdulaziz%20District,%20Riyadh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="440"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                          ></iframe>
                        )}
                        {activeMapEmbed === 'khobar' && (
                          <iframe
                            title="Altapete Solutions Al Khobar Map"
                            src="https://maps.google.com/maps?q=King%20Khalid%20Street%20Cross%2015,%20Al%20Khobar,%20Saudi%20Arabia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="440"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                          ></iframe>
                        )}
                        {activeMapEmbed === 'lahore' && (
                          <iframe
                            title="Altapete Solutions Lahore Tech Center Map"
                            src="https://maps.google.com/maps?q=159-D%20Nawab%20Town,%20Lahore,%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="440"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                          ></iframe>
                        )}
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Right Col: Selected Hub Details */}
              <div className="col-xl-4 col-lg-5">
                <div className="selected-hub-card">
                  
                  <div className="hub-card-header">
                    <div className="hub-flag-title">
                      <span className="hub-flag">{selectedLocation.flag}</span>
                      <div>
                        <span className="hub-country">{selectedLocation.country}</span>
                        <h3 className="hub-city-name">{selectedLocation.city}</h3>
                      </div>
                    </div>
                    <span className={`hub-type-pill ${selectedLocation.isHQ ? 'hq-pill' : ''}`}>
                      {selectedLocation.type}
                    </span>
                  </div>

                  <div className="hub-coord-row">
                    <div className="coord-item">
                      <Compass size={13} />
                      <span>{selectedLocation.lat}° N, {selectedLocation.lng}° E</span>
                    </div>
                    <div className="coord-item">
                      <Clock size={13} />
                      <span>{times[selectedLocation.currentTimeKey]}</span>
                    </div>
                  </div>

                  <div className="hub-info-block">
                    <div className="info-label">
                      <MapPin size={14} color="#2c73d9" />
                      <span>Physical Address</span>
                    </div>
                    <p className="info-val address-text">{selectedLocation.address}</p>
                    <span className="postal-text">{selectedLocation.postalCode}</span>
                  </div>

                  <div className="hub-info-block">
                    <div className="info-label">
                      <Layers size={14} color="#2c73d9" />
                      <span>Regional Practice Focus</span>
                    </div>
                    <p className="info-val focus-text">{selectedLocation.focus}</p>
                  </div>

                  <div className="hub-info-block">
                    <div className="info-label">
                      <Clock size={14} color="#2c73d9" />
                      <span>Office Consultation Hours</span>
                    </div>
                    <p className="info-val">{selectedLocation.hours}</p>
                  </div>

                  <div className="hub-action-row">
                    <a href={`tel:${selectedLocation.phone.replace(/\s+/g, '')}`} className="hub-call-btn hover-up">
                      <Phone size={15} />
                      <span>{selectedLocation.phone}</span>
                    </a>
                    <a 
                      href={selectedLocation.gmapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hub-nav-btn hover-up"
                      title="Open in Google Maps for Navigation"
                    >
                      <Navigation size={15} />
                      <span>Get Directions</span>
                    </a>
                  </div>

                  <div className="hub-quick-switcher">
                    <span className="switcher-label">Quick Select Hub:</span>
                    <div className="switcher-chips">
                      {locations.map(l => (
                        <button
                          key={l.id}
                          onClick={() => setSelectedLocationId(l.id)}
                          className={`chip-btn ${selectedLocationId === l.id ? 'active-chip' : ''}`}
                        >
                          {l.city}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Complete Directory Grid */}
          <div className="offices-grid-section">
            <div className="offices-grid-header">
              <h3 className="offices-heading">Complete Directory of Registered Offices &amp; Regional Hubs</h3>
              <p className="offices-sub">
                Click on any card to view directions or dial direct. All physical locations support pre-scheduled in-person executive briefings.
              </p>
            </div>

            <div className="row g-4">
              {filteredLocations.map((loc) => {
                const isSelected = selectedLocationId === loc.id;
                return (
                  <div className="col-lg-4 col-md-6 col-12" key={loc.id}>
                    <div
                      className={`office-card ${isSelected ? 'active-card' : ''} ${loc.isHQ ? 'hq-border' : ''}`}
                      onClick={() => setSelectedLocationId(loc.id)}
                    >
                      <div className="office-card-top">
                        <div className="office-flag-wrap">
                          <span className="card-flag">{loc.flag}</span>
                          <div>
                            <div className="card-city-line">
                              <h4 className="card-city">{loc.city}</h4>
                              {loc.isHQ && <span className="hq-tag">HQ</span>}
                            </div>
                            <span className="card-country">{loc.country}</span>
                          </div>
                        </div>
                        <span className="card-region-tag">{loc.regionTag}</span>
                      </div>

                      <div className="office-body">
                        <div className="office-meta-row">
                          <MapPin size={15} className="meta-icon" />
                          <div className="meta-content">
                            <span className="meta-address">{loc.address}</span>
                          </div>
                        </div>

                        <div className="office-meta-row">
                          <Phone size={15} className="meta-icon" />
                          <div className="meta-content">
                            <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="meta-phone-link">
                              {loc.phone}
                            </a>
                            {loc.altPhone && (
                              <a href={`tel:${loc.altPhone.replace(/\s+/g, '')}`} className="meta-alt-phone">
                                Alt: {loc.altPhone}
                              </a>
                            )}
                          </div>
                        </div>

                        <div className="office-meta-row">
                          <Clock size={15} className="meta-icon" />
                          <div className="meta-content">
                            <span className="meta-hours">{loc.hours}</span>
                            <span className="meta-live-time">Local Time: <strong>{times[loc.currentTimeKey]}</strong></span>
                          </div>
                        </div>

                        <div className="office-focus-box">
                          <strong>Key Practice:</strong> {loc.focus}
                        </div>
                      </div>

                      <div className="office-footer">
                        <a
                          href={loc.gmapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="office-dir-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Directions in Maps</span>
                          <ExternalLink size={13} />
                        </a>
                        <a
                          href={`mailto:${loc.email}`}
                          className="office-email-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Mail size={13} />
                          <span>Direct Inquiry</span>
                        </a>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: FORM */}
      <section id="inquiry-form" className="form-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            
            <div className="col-lg-5">
              <div className="form-pitch-wrapper">
                
                <div className="pitch-eyebrow">
                  <Sparkles size={14} color="#2c73d9" />
                  <span>COMMENCE YOUR ENGAGEMENT</span>
                </div>

                <h2 className="pitch-heading">
                  Submit Your Scope or Schedule a <span className="text-gradient">Discovery Session</span>
                </h2>

                <p className="pitch-lead">
                  Whether you are planning a greenfield ERP implementation, navigating ZATCA Phase 2 clearance,
                  or modernizing enterprise architectures — our senior engineering directors are ready to provide technical guidance.
                </p>

                <div className="pitch-trust-list">
                  <div className="trust-item">
                    <div className="trust-icon"><CheckCircle2 size={18} color="#10b981" /></div>
                    <div>
                      <strong>Guaranteed 24-Hour SLA</strong>
                      <span>Direct technical review by certified solution architects, not sales gatekeepers.</span>
                    </div>
                  </div>

                  <div className="trust-item">
                    <div className="trust-icon"><ShieldCheck size={18} color="#2c73d9" /></div>
                    <div>
                      <strong>NDA &amp; IP Protection</strong>
                      <span>Comprehensive confidentiality guaranteed for proprietary workflows and datasets.</span>
                    </div>
                  </div>

                  <div className="trust-item">
                    <div className="trust-icon"><FileCheck2 size={18} color="#f59e0b" /></div>
                    <div>
                      <strong>Transparent Milestone Architecture</strong>
                      <span>Detailed deliverables, risk mitigation roadmaps, and predictable fixed-cost structures.</span>
                    </div>
                  </div>

                  <div className="trust-item">
                    <div className="trust-icon"><Users size={18} color="#8b5cf6" /></div>
                    <div>
                      <strong>On-Site &amp; Hybrid Delivery</strong>
                      <span>Local teams in Riyadh, Khobar, Dubai &amp; Lahore providing dedicated presence.</span>
                    </div>
                  </div>
                </div>

                <div className="pitch-emergency-box">
                  <Headphones size={24} color="#2c73d9" />
                  <div>
                    <h5 className="em-title">Need Immediate Advisory?</h5>
                    <p className="em-text">Call our KSA Senior Advisory Desk directly: <strong>+966 53 382 0454</strong></p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-7">
              <div className="form-card-container">
                
                <div className="form-card-header">
                  <h3 className="form-title">Enterprise Project Inquiry &amp; RFP Form</h3>
                  <p className="form-sub">Fields marked with an asterisk (*) are required for technical routing.</p>
                </div>

                {formSubmitted ? (
                  <div className="form-success-state text-center">
                    <div className="success-icon-circle">
                      <CheckCircle2 size={48} color="#10b981" />
                    </div>
                    <h3 className="success-title">Inquiry Received Successfully</h3>
                    <p className="success-text">
                      Thank you, <strong>{formData.name || 'Valued Partner'}</strong>. Your project brief has been routed to our
                      Senior ERP Solutions Director. An architect will review your technical parameters and contact you at <strong>{formData.email}</strong> within 1 business day.
                    </p>
                    <div className="success-details-card">
                      <div><strong>Subject:</strong> {formData.subject || 'Enterprise Consultation'}</div>
                      <div><strong>Service Focus:</strong> {formData.service}</div>
                      <div><strong>Estimated Budget:</strong> {formData.budget}</div>
                    </div>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          service: 'Enterprise ERP Implementation',
                          budget: '$15k - $50k',
                          subject: '',
                          message: ''
                        });
                      }}
                      className="btn btn-outline-brand mt-4 hover-up"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="contact-actual-form">
                    
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-field-label">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Tariq Al-Mansoor"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="custom-form-input"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-field-label">Business Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="custom-form-input"
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-field-label">Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+966 5X XXX XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="custom-form-input"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-field-label">Company / Entity Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Al-Mansoor Holding"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="custom-form-input"
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-field-label">Primary Service Required *</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="custom-form-select"
                        >
                          <option value="Enterprise ERP Implementation">Enterprise ERP Implementation</option>
                          <option value="Oracle Fusion / EBS Consulting">Oracle Fusion / EBS Migration &amp; Advisory</option>
                          <option value="SAP S/4HANA & ECC Transformation">SAP S/4HANA &amp; ECC Transformation</option>
                          <option value="Odoo ERP Development & Upgrades">Odoo ERP Customization &amp; Upgrades</option>
                          <option value="ZATCA Phase 2 E-Invoicing Compliance">ZATCA Phase 2 E-Invoicing Compliance</option>
                          <option value="Custom Software & Cloud Engineering">Custom Software &amp; Cloud Engineering</option>
                          <option value="Corporate Tax, Zakat & Advisory">Corporate Tax, Zakat &amp; Advisory</option>
                          <option value="Dedicated Engineering Team Outsourcing">Dedicated Engineering Team Outsourcing</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-field-label">Project Scope / Budget Range</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="custom-form-select"
                        >
                          <option value="<$15,000">Under $15,000 (Scoping / Audit)</option>
                          <option value="$15k - $50k">$15,000 - $50,000 (Standard Rollout)</option>
                          <option value="$50k - $150k">$50,000 - $150,000 (Mid-Market ERP)</option>
                          <option value=">$150,000">$150,000+ (Enterprise Multi-Country)</option>
                          <option value="Retainer">Monthly Dedicated Retainer</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-field-label">Subject / Engagement Title *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Migration from Legacy ERP to Oracle / Odoo with ZATCA Phase 2"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="custom-form-input"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-field-label">Project Scope, Current Systems &amp; Key Requirements *</label>
                      <textarea
                        required
                        rows="5"
                        placeholder="Please summarize your target objectives, user counts, existing ERP or database systems, required integrations, and desired launch timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="custom-form-textarea"
                      ></textarea>
                    </div>

                    <div className="form-submit-row">
                      <button
                        type="submit"
                        disabled={formSubmitting}
                        className="btn btn-linear form-submit-btn hover-up"
                      >
                        {formSubmitting ? (
                          <span>Processing Scope &amp; Routing...</span>
                        ) : (
                          <>
                            <span>Send Project Scope</span>
                            <Send size={16} />
                          </>
                        )}
                      </button>
                      <div className="form-nda-text">
                        <ShieldCheck size={14} color="#10b981" />
                        <span>Protected by Altapete Enterprise NDA Guarantee. Zero Spam.</span>
                      </div>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: FAQS */}
      <section className="faq-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-badge">
              <Sparkles size={13} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="section-title">
              Common Inquiries About <span className="text-gradient">Engaging Altapete</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know regarding response times, on-site availability, project governance, and commercial agreements.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="faq-accordion-list">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`faq-item-card ${isOpen ? 'active-faq' : ''}`}
                      onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                    >
                      <div className="faq-question-row">
                        <h4 className="faq-question-text">{faq.q}</h4>
                        <div className={`faq-chevron ${isOpen ? 'rotate' : ''}`}>
                          <ChevronDown size={18} />
                        </div>
                      </div>
                      {isOpen && (
                        <div className="faq-answer-body">
                          <p className="faq-answer-text">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: BOTTOM CTA */}
      <section className="bottom-cta-section">
        <div className="container">
          <div className="cta-banner-box">
            <div className="row align-items-center">
              <div className="col-lg-8 text-lg-start text-center mb-lg-0 mb-4">
                <h3 className="cta-banner-title">Accelerate Your Enterprise Transformation Today</h3>
                <p className="cta-banner-desc">
                  Schedule a private executive consultation with our regional partners in Riyadh, Dubai, or Lahore.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end text-center">
                <a href="#inquiry-form" className="btn btn-linear btn-lg hover-up">
                  <span>Start Your Project</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .contact-page-wrapper {
          position: relative;
          overflow: hidden;
          padding-bottom: 40px;
        }

        .text-gradient {
          background: linear-gradient(135deg, #2c73d9 0%, #00d2ff 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* --- Hero --- */
        .contact-hero {
          padding: 85px 0 65px;
          position: relative;
        }

        .hero-eyebrow-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 7px 18px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.2px;
          margin-bottom: 22px;
        }

        .dark-theme .hero-eyebrow-badge {
          background: rgba(44, 115, 217, 0.12);
          border: 1px solid rgba(44, 115, 217, 0.3);
          color: #60a5fa;
        }

        .light-theme .hero-eyebrow-badge {
          background: rgba(44, 115, 217, 0.08);
          border: 1px solid rgba(44, 115, 217, 0.25);
          color: #2c73d9;
        }

        .live-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: statusPulse 2s infinite;
        }

        @keyframes statusPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }

        .hero-headline {
          font-size: clamp(2.3rem, 4.5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.18;
          margin-bottom: 22px;
          letter-spacing: -0.5px;
        }

        .dark-theme .hero-headline { color: #f8fafc; }
        .light-theme .hero-headline { color: #0f172a; }

        .hero-subheadline {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          line-height: 1.75;
          max-width: 780px;
          margin: 0 auto 36px;
        }

        .dark-theme .hero-subheadline { color: #94a3b8; }
        .light-theme .hero-subheadline { color: #475569; }

        .hero-pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          max-width: 880px;
          margin: 0 auto 38px;
        }

        .pillar-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          text-align: left;
        }

        .dark-theme .pillar-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .light-theme .pillar-item {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.07);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .pillar-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: rgba(44, 115, 217, 0.12);
          color: #2c73d9;
        }

        .pillar-text {
          display: flex;
          flex-direction: column;
        }

        .pillar-text strong {
          font-size: 13.5px;
          font-weight: 700;
        }

        .dark-theme .pillar-text strong { color: #f1f5f9; }
        .light-theme .pillar-text strong { color: #0f172a; }

        .pillar-text span {
          font-size: 11.5px;
        }

        .dark-theme .pillar-text span { color: #64748b; }
        .light-theme .pillar-text span { color: #64748b; }

        .hero-action-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-outline-custom {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14.5px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .dark-theme .btn-outline-custom {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #e2e8f0;
        }

        .dark-theme .btn-outline-custom:hover {
          border-color: #2c73d9;
          color: #60a5fa;
          background: rgba(44, 115, 217, 0.1);
        }

        .light-theme .btn-outline-custom {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.15);
          color: #1e293b;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .light-theme .btn-outline-custom:hover {
          border-color: #2c73d9;
          color: #2c73d9;
          background: rgba(44, 115, 217, 0.05);
        }

        .btn-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 14.5px;
          background: #10b981;
          color: #ffffff !important;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn-whatsapp:hover {
          background: #059669;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
        }

        /* --- Channels --- */
        .channels-section {
          padding: 30px 0 70px;
        }

        .contact-tile {
          border-radius: 18px;
          padding: 26px 22px;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .dark-theme .contact-tile {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .light-theme .contact-tile {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.07);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .contact-tile:hover {
          transform: translateY(-4px);
        }

        .dark-theme .contact-tile:hover {
          border-color: rgba(44, 115, 217, 0.4);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }

        .light-theme .contact-tile:hover {
          border-color: rgba(44, 115, 217, 0.35);
          box-shadow: 0 10px 30px rgba(44, 115, 217, 0.1);
        }

        .tile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .tile-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .phone-icon { background: rgba(44, 115, 217, 0.12); color: #2c73d9; }
        .whatsapp-icon { background: rgba(16, 185, 129, 0.14); color: #10b981; }
        .mail-icon { background: rgba(139, 92, 246, 0.14); color: #8b5cf6; }
        .calendar-icon { background: rgba(245, 158, 11, 0.14); color: #f59e0b; }

        .tile-badge {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          padding: 3px 10px;
          border-radius: 100px;
        }

        .dark-theme .tile-badge { background: rgba(255, 255, 255, 0.06); color: #94a3b8; }
        .light-theme .tile-badge { background: rgba(0, 0, 0, 0.05); color: #64748b; }

        .active-badge {
          background: rgba(16, 185, 129, 0.14) !important;
          color: #10b981 !important;
        }

        .tile-title {
          font-size: 19px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .dark-theme .tile-title { color: #f1f5f9; }
        .light-theme .tile-title { color: #0f172a; }

        .tile-desc {
          font-size: 13px;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .dark-theme .tile-desc { color: #94a3b8; }
        .light-theme .tile-desc { color: #64748b; }

        .tile-action-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-top: auto;
        }

        .channel-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .dark-theme .channel-link {
          background: rgba(255, 255, 255, 0.03);
          color: #e2e8f0;
        }

        .dark-theme .channel-link:hover {
          background: rgba(44, 115, 217, 0.14);
          color: #60a5fa;
        }

        .light-theme .channel-link {
          background: #f8fafc;
          color: #1e293b;
        }

        .light-theme .channel-link:hover {
          background: #f0f4ff;
          color: #2c73d9;
        }

        .channel-link-main {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .channel-number {
          font-size: 13px;
          font-weight: 600;
        }

        .channel-tag {
          font-size: 11px;
        }

        .dark-theme .channel-tag { color: #64748b; }
        .light-theme .channel-tag { color: #94a3b8; }

        .whatsapp-info-box {
          display: flex;
          flex-direction: column;
          padding: 12px;
          border-radius: 10px;
          margin-bottom: 16px;
        }

        .dark-theme .whatsapp-info-box {
          background: rgba(16, 185, 129, 0.08);
          border: 1px dashed rgba(16, 185, 129, 0.25);
        }

        .light-theme .whatsapp-info-box {
          background: #ecfdf5;
          border: 1px dashed #a7f3d0;
        }

        .wa-num {
          font-size: 15px;
          font-weight: 700;
          color: #10b981;
        }

        .wa-sub {
          font-size: 11.5px;
          margin-top: 2px;
        }

        .dark-theme .wa-sub { color: #6ee7b7; }
        .light-theme .wa-sub { color: #047857; }

        .tile-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
          width: 100%;
        }

        .wa-btn {
          background: #10b981;
          color: #ffffff !important;
          margin-top: auto;
        }

        .wa-btn:hover { background: #059669; }

        .email-address-box {
          padding: 10px 12px;
          border-radius: 8px;
          margin-bottom: 14px;
          font-size: 13px;
          font-weight: 600;
          word-break: break-all;
        }

        .dark-theme .email-address-box {
          background: rgba(255, 255, 255, 0.03);
          color: #e2e8f0;
        }

        .light-theme .email-address-box {
          background: #f8fafc;
          color: #1e293b;
        }

        .tile-btn-group {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .mail-btn {
          background: rgba(139, 92, 246, 0.12);
          color: #8b5cf6 !important;
          flex: 1;
        }

        .mail-btn:hover {
          background: #8b5cf6;
          color: #ffffff !important;
        }

        .tile-copy-btn {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          border: 1px solid rgba(139, 92, 246, 0.25);
          background: transparent;
          color: #8b5cf6;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .tile-copy-btn:hover {
          background: rgba(139, 92, 246, 0.1);
        }

        .tile-note {
          font-size: 11px;
          margin-top: 10px;
          text-align: center;
        }

        .dark-theme .tile-note { color: #64748b; }
        .light-theme .tile-note { color: #94a3b8; }

        .discovery-perks {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .perk {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
        }

        .dark-theme .perk { color: #94a3b8; }
        .light-theme .perk { color: #475569; }

        .calendar-btn {
          background: rgba(245, 158, 11, 0.12);
          color: #f59e0b !important;
          margin-top: auto;
        }

        .calendar-btn:hover {
          background: #f59e0b;
          color: #ffffff !important;
        }

        /* --- Geographic Map Section --- */
        .geo-section {
          padding: 80px 0 70px;
          position: relative;
        }

        .dark-theme .geo-section { background: #080f1d; }
        .light-theme .geo-section { background: #f8fafc; }

        .section-head {
          max-width: 720px;
          margin: 0 auto 34px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          margin-bottom: 16px;
        }

        .dark-theme .section-badge {
          background: rgba(44, 115, 217, 0.12);
          color: #60a5fa;
          border: 1px solid rgba(44, 115, 217, 0.25);
        }

        .light-theme .section-badge {
          background: rgba(44, 115, 217, 0.08);
          color: #2c73d9;
          border: 1px solid rgba(44, 115, 217, 0.2);
        }

        .section-title {
          font-size: clamp(1.8rem, 3.2vw, 2.7rem);
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 14px;
        }

        .dark-theme .section-title { color: #f8fafc; }
        .light-theme .section-title { color: #0f172a; }

        .section-subtitle {
          font-size: 15.5px;
          line-height: 1.7;
        }

        .dark-theme .section-subtitle { color: #94a3b8; }
        .light-theme .section-subtitle { color: #475569; }

        .geo-controls-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 28px;
        }

        .geo-country-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .country-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border: 1.5px solid transparent;
          transition: all 0.25s ease;
          background: transparent;
        }

        .dark-theme .country-tab-btn {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
        }

        .dark-theme .country-tab-btn:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(44, 115, 217, 0.4);
        }

        .light-theme .country-tab-btn {
          background: #ffffff;
          border-color: rgba(0, 0, 0, 0.09);
          color: #334155;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
        }

        .light-theme .country-tab-btn:hover {
          border-color: #2c73d9;
          background: #f0f4ff;
        }

        .country-tab-btn.active {
          border-color: #2c73d9 !important;
        }

        .dark-theme .country-tab-btn.active {
          background: rgba(44, 115, 217, 0.16) !important;
          color: #60a5fa !important;
          box-shadow: 0 0 16px rgba(44, 115, 217, 0.3);
        }

        .light-theme .country-tab-btn.active {
          background: #e0ecff !important;
          color: #1e40af !important;
          box-shadow: 0 2px 10px rgba(44, 115, 217, 0.15);
        }

        .tab-count {
          padding: 2px 7px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
        }

        .dark-theme .tab-count { background: rgba(255, 255, 255, 0.1); color: #e2e8f0; }
        .light-theme .tab-count { background: rgba(0, 0, 0, 0.07); color: #1e293b; }

        /* Map Mode Toggle */
        .map-view-toggle {
          display: flex;
          gap: 6px;
          padding: 4px;
          border-radius: 12px;
        }

        .dark-theme .map-view-toggle {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .light-theme .map-view-toggle {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
        }

        .toggle-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 600;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dark-theme .toggle-pill-btn { color: #94a3b8; }
        .light-theme .toggle-pill-btn { color: #64748b; }

        .toggle-pill-btn.active {
          background: #2c73d9 !important;
          color: #ffffff !important;
          box-shadow: 0 2px 8px rgba(44, 115, 217, 0.3);
        }

        /* Map Canvas */
        .map-card-wrapper {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .dark-theme .map-card-wrapper {
          background: #0d1527;
          border: 1px solid rgba(44, 115, 217, 0.25);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }

        .light-theme .map-card-wrapper {
          background: #ffffff;
          border: 1px solid rgba(44, 115, 217, 0.2);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
        }

        .map-hud-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 20px;
          border-bottom: 1px solid;
          flex-wrap: wrap;
          gap: 12px;
        }

        .dark-theme .map-hud-bar {
          background: rgba(15, 23, 42, 0.85);
          border-color: rgba(255, 255, 255, 0.07);
        }

        .light-theme .map-hud-bar {
          background: #f1f5f9;
          border-color: rgba(0, 0, 0, 0.08);
        }

        .hud-status {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hud-radar-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00d2ff;
          box-shadow: 0 0 10px #00d2ff;
          animation: statusPulse 1.8s infinite;
        }

        .hud-text {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .dark-theme .hud-text { color: #38bdf8; }
        .light-theme .hud-text { color: #0284c7; }

        .hud-clocks {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .hud-clock-item {
          font-size: 11.5px;
          display: flex;
          gap: 5px;
        }

        .clock-city { font-weight: 700; }
        .dark-theme .clock-city { color: #94a3b8; }
        .light-theme .clock-city { color: #475569; }

        .clock-time { font-family: monospace; font-weight: 600; }
        .dark-theme .clock-time { color: #f1f5f9; }
        .light-theme .clock-time { color: #0f172a; }

        .map-svg-viewport {
          position: relative;
          width: 100%;
          min-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
        }

        .regional-vector-map {
          width: 100%;
          height: auto;
          display: block;
        }

        .country-glow-sa {
          filter: drop-shadow(0 0 8px rgba(44, 115, 217, 0.25));
        }

        .sync-pulse-line {
          animation: syncDash 16s linear infinite;
        }

        .sync-pulse-line-fast {
          animation: syncDash 10s linear infinite;
        }

        @keyframes syncDash {
          to {
            stroke-dashoffset: -100;
          }
        }

        .radar-ripple-pulse {
          animation: radarExpand 2.5s ease-out infinite;
          transform-origin: center;
        }

        @keyframes radarExpand {
          0% { transform: scale(0.3); opacity: 1; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        .spin-dash-ring {
          animation: spinRing 10s linear infinite;
          transform-origin: center;
        }

        @keyframes spinRing {
          100% { transform: rotate(360deg); }
        }

        .map-badge-group:hover rect {
          stroke: #2c73d9 !important;
          stroke-width: 2 !important;
        }

        .active-badge-group rect {
          filter: drop-shadow(0 4px 12px rgba(44, 115, 217, 0.45)) !important;
        }

        .map-corner-legend {
          position: absolute;
          bottom: 14px;
          left: 14px;
          padding: 9px 14px;
          border-radius: 10px;
          font-size: 11px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .dark-theme .map-corner-legend {
          background: rgba(15, 23, 42, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
        }

        .light-theme .map-corner-legend {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #475569;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .legend-marker { font-size: 12px; }
        .hq-marker { color: #f59e0b; }
        .tech-marker { color: #8b5cf6; }
        .hub-marker { color: #2c73d9; }

        /* Interactive Mode (Google Maps) */
        .interactive-mode-container {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .interactive-tabs-bar {
          display: flex;
          gap: 8px;
          padding: 12px 18px;
          border-bottom: 1px solid;
          flex-wrap: wrap;
        }

        .dark-theme .interactive-tabs-bar {
          background: rgba(15, 23, 42, 0.6);
          border-color: rgba(255, 255, 255, 0.07);
        }

        .light-theme .interactive-tabs-bar {
          background: #f8fafc;
          border-color: rgba(0, 0, 0, 0.07);
        }

        .subtab-btn {
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dark-theme .subtab-btn {
          background: rgba(255, 255, 255, 0.04);
          color: #94a3b8;
        }

        .light-theme .subtab-btn {
          background: #e2e8f0;
          color: #475569;
        }

        .subtab-btn.active {
          border-color: #2c73d9 !important;
          background: #2c73d9 !important;
          color: #ffffff !important;
        }

        /* Selected Hub Detail Card */
        .selected-hub-card {
          border-radius: 20px;
          padding: 28px;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .dark-theme .selected-hub-card {
          background: rgba(13, 21, 39, 0.9);
          border: 1.5px solid rgba(44, 115, 217, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .light-theme .selected-hub-card {
          background: #ffffff;
          border: 1.5px solid rgba(44, 115, 217, 0.25);
          box-shadow: 0 10px 30px rgba(44, 115, 217, 0.08);
        }

        .hub-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 18px;
          border-bottom: 1px solid;
        }

        .dark-theme .hub-card-header { border-color: rgba(255, 255, 255, 0.07); }
        .light-theme .hub-card-header { border-color: rgba(0, 0, 0, 0.07); }

        .hub-flag-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hub-flag { font-size: 32px; }

        .hub-country {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .dark-theme .hub-country { color: #64748b; }
        .light-theme .hub-country { color: #94a3b8; }

        .hub-city-name {
          font-size: 24px;
          font-weight: 800;
          margin: 2px 0 0;
        }

        .dark-theme .hub-city-name { color: #f8fafc; }
        .light-theme .hub-city-name { color: #0f172a; }

        .hub-type-pill {
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .dark-theme .hub-type-pill {
          background: rgba(44, 115, 217, 0.12);
          color: #60a5fa;
          border: 1px solid rgba(44, 115, 217, 0.3);
        }

        .light-theme .hub-type-pill {
          background: rgba(44, 115, 217, 0.08);
          color: #2c73d9;
          border: 1px solid rgba(44, 115, 217, 0.2);
        }

        .hq-pill {
          background: rgba(245, 158, 11, 0.15) !important;
          color: #f59e0b !important;
          border-color: rgba(245, 158, 11, 0.3) !important;
        }

        .hub-coord-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 10px;
          margin-bottom: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .dark-theme .hub-coord-row {
          background: rgba(255, 255, 255, 0.03);
          color: #94a3b8;
        }

        .light-theme .hub-coord-row {
          background: #f8fafc;
          color: #475569;
        }

        .coord-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .hub-info-block {
          margin-bottom: 18px;
        }

        .info-label {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
        }

        .dark-theme .info-label { color: #64748b; }
        .light-theme .info-label { color: #94a3b8; }

        .info-val {
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .dark-theme .info-val { color: #cbd5e1; }
        .light-theme .info-val { color: #334155; }

        .address-text { font-weight: 600; }

        .postal-text {
          font-size: 12px;
          display: block;
          margin-top: 3px;
        }

        .dark-theme .postal-text { color: #64748b; }
        .light-theme .postal-text { color: #94a3b8; }

        .focus-text { font-size: 13px; }

        .hub-action-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: auto;
          margin-bottom: 20px;
        }

        .hub-call-btn, .hub-nav-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px;
          border-radius: 10px;
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          text-align: center;
        }

        .hub-call-btn {
          background: #2c73d9;
          color: #ffffff !important;
        }

        .hub-call-btn:hover { background: #1d4ed8; }

        .dark-theme .hub-nav-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
        }

        .dark-theme .hub-nav-btn:hover {
          background: rgba(255, 255, 255, 0.09);
          color: #60a5fa;
        }

        .light-theme .hub-nav-btn {
          background: #f1f5f9;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #1e293b;
        }

        .light-theme .hub-nav-btn:hover {
          background: #e2e8f0;
          color: #2c73d9;
        }

        .hub-quick-switcher {
          border-top: 1px solid;
          padding-top: 16px;
        }

        .dark-theme .hub-quick-switcher { border-color: rgba(255, 255, 255, 0.07); }
        .light-theme .hub-quick-switcher { border-color: rgba(0, 0, 0, 0.07); }

        .switcher-label {
          font-size: 11px;
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
        }

        .dark-theme .switcher-label { color: #64748b; }
        .light-theme .switcher-label { color: #94a3b8; }

        .switcher-chips {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .chip-btn {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          border: 1px solid;
          background: transparent;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dark-theme .chip-btn {
          border-color: rgba(255, 255, 255, 0.08);
          color: #94a3b8;
        }

        .dark-theme .chip-btn:hover {
          background: rgba(255, 255, 255, 0.06);
          color: #e2e8f0;
        }

        .light-theme .chip-btn {
          border-color: rgba(0, 0, 0, 0.08);
          color: #64748b;
        }

        .light-theme .chip-btn:hover {
          background: #f1f5f9;
          color: #1e293b;
        }

        .active-chip {
          border-color: #2c73d9 !important;
          background: rgba(44, 115, 217, 0.15) !important;
          color: #2c73d9 !important;
          font-weight: 700 !important;
        }

        /* Complete Offices Directory Cards */
        .offices-grid-section {
          margin-top: 70px;
        }

        .offices-grid-header {
          margin-bottom: 30px;
        }

        .offices-heading {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .dark-theme .offices-heading { color: #f8fafc; }
        .light-theme .offices-heading { color: #0f172a; }

        .offices-sub {
          font-size: 14px;
        }

        .dark-theme .offices-sub { color: #94a3b8; }
        .light-theme .offices-sub { color: #64748b; }

        .office-card {
          border-radius: 16px;
          padding: 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .dark-theme .office-card {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .light-theme .office-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.07);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
        }

        .office-card:hover {
          transform: translateY(-4px);
        }

        .dark-theme .office-card:hover {
          border-color: rgba(44, 115, 217, 0.4);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .light-theme .office-card:hover {
          border-color: rgba(44, 115, 217, 0.35);
          box-shadow: 0 8px 24px rgba(44, 115, 217, 0.08);
        }

        .active-card {
          border-color: #2c73d9 !important;
        }

        .dark-theme .active-card {
          background: rgba(44, 115, 217, 0.06);
          box-shadow: 0 0 20px rgba(44, 115, 217, 0.15);
        }

        .light-theme .active-card {
          background: #f0f7ff;
          box-shadow: 0 4px 20px rgba(44, 115, 217, 0.12);
        }

        .hq-border {
          border-top: 3px solid #f59e0b !important;
        }

        .office-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid;
        }

        .dark-theme .office-card-top { border-color: rgba(255, 255, 255, 0.06); }
        .light-theme .office-card-top { border-color: rgba(0, 0, 0, 0.06); }

        .office-flag-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .card-flag { font-size: 24px; }

        .card-city-line {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .card-city {
          font-size: 18px;
          font-weight: 800;
          margin: 0;
        }

        .dark-theme .card-city { color: #f8fafc; }
        .light-theme .card-city { color: #0f172a; }

        .hq-tag {
          background: #f59e0b;
          color: #ffffff;
          font-size: 10px;
          font-weight: 800;
          padding: 1px 6px;
          border-radius: 4px;
        }

        .card-country { font-size: 12px; }
        .dark-theme .card-country { color: #94a3b8; }
        .light-theme .card-country { color: #64748b; }

        .card-region-tag {
          font-size: 10.5px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .dark-theme .card-region-tag {
          background: rgba(255, 255, 255, 0.05);
          color: #94a3b8;
        }

        .light-theme .card-region-tag {
          background: #f1f5f9;
          color: #475569;
        }

        .office-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .office-meta-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .meta-icon {
          color: #2c73d9;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .meta-content {
          display: flex;
          flex-direction: column;
          font-size: 12.5px;
          line-height: 1.5;
        }

        .dark-theme .meta-address { color: #cbd5e1; }
        .light-theme .meta-address { color: #334155; }

        .meta-phone-link {
          font-weight: 600;
          text-decoration: none;
        }

        .dark-theme .meta-phone-link { color: #60a5fa; }
        .light-theme .meta-phone-link { color: #2c73d9; }

        .meta-alt-phone {
          font-size: 11.5px;
          text-decoration: none;
        }

        .dark-theme .meta-alt-phone { color: #64748b; }
        .light-theme .meta-alt-phone { color: #94a3b8; }

        .dark-theme .meta-hours { color: #94a3b8; }
        .light-theme .meta-hours { color: #64748b; }

        .meta-live-time {
          font-size: 11.5px;
          margin-top: 2px;
        }

        .dark-theme .meta-live-time { color: #38bdf8; }
        .light-theme .meta-live-time { color: #0284c7; }

        .office-focus-box {
          font-size: 12px;
          line-height: 1.5;
          padding: 10px 12px;
          border-radius: 8px;
          margin-top: 4px;
        }

        .dark-theme .office-focus-box {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: #94a3b8;
        }

        .light-theme .office-focus-box {
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.05);
          color: #475569;
        }

        .office-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid;
          font-size: 12px;
          font-weight: 600;
        }

        .dark-theme .office-footer { border-color: rgba(255, 255, 255, 0.06); }
        .light-theme .office-footer { border-color: rgba(0, 0, 0, 0.06); }

        .office-dir-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          color: #2c73d9;
        }

        .office-dir-link:hover { text-decoration: underline; }

        .office-email-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
        }

        .dark-theme .office-email-link { color: #94a3b8; }
        .dark-theme .office-email-link:hover { color: #cbd5e1; }
        .light-theme .office-email-link { color: #64748b; }
        .light-theme .office-email-link:hover { color: #1e293b; }

        /* Form Pitch Section */
        .form-section {
          padding: 85px 0 75px;
        }

        .pitch-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.2px;
          margin-bottom: 16px;
        }

        .dark-theme .pitch-eyebrow { color: #60a5fa; }
        .light-theme .pitch-eyebrow { color: #2c73d9; }

        .pitch-heading {
          font-size: clamp(2rem, 3vw, 2.7rem);
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 20px;
        }

        .dark-theme .pitch-heading { color: #f8fafc; }
        .light-theme .pitch-heading { color: #0f172a; }

        .pitch-lead {
          font-size: 15.5px;
          line-height: 1.75;
          margin-bottom: 32px;
        }

        .dark-theme .pitch-lead { color: #94a3b8; }
        .light-theme .pitch-lead { color: #475569; }

        .pitch-trust-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 36px;
        }

        .trust-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .trust-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .dark-theme .trust-icon { background: rgba(255, 255, 255, 0.04); }
        .light-theme .trust-icon { background: #f1f5f9; }

        .trust-item strong {
          display: block;
          font-size: 14.5px;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .dark-theme .trust-item strong { color: #f1f5f9; }
        .light-theme .trust-item strong { color: #0f172a; }

        .trust-item span {
          font-size: 13px;
          line-height: 1.5;
        }

        .dark-theme .trust-item span { color: #64748b; }
        .light-theme .trust-item span { color: #64748b; }

        .pitch-emergency-box {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 22px;
          border-radius: 14px;
        }

        .dark-theme .pitch-emergency-box {
          background: rgba(44, 115, 217, 0.08);
          border: 1px solid rgba(44, 115, 217, 0.2);
        }

        .light-theme .pitch-emergency-box {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
        }

        .em-title {
          font-size: 14.5px;
          font-weight: 700;
          margin: 0 0 3px;
        }

        .dark-theme .em-title { color: #93c5fd; }
        .light-theme .em-title { color: #1e40af; }

        .em-text {
          font-size: 13px;
          margin: 0;
        }

        .dark-theme .em-text { color: #cbd5e1; }
        .light-theme .em-text { color: #334155; }

        /* Form Card */
        .form-card-container {
          border-radius: 22px;
          padding: 38px 32px;
        }

        .dark-theme .form-card-container {
          background: rgba(13, 21, 39, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        }

        .light-theme .form-card-container {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
        }

        .form-card-header {
          margin-bottom: 26px;
        }

        .form-title {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .dark-theme .form-title { color: #f8fafc; }
        .light-theme .form-title { color: #0f172a; }

        .form-sub {
          font-size: 13px;
          margin: 0;
        }

        .dark-theme .form-sub { color: #64748b; }
        .light-theme .form-sub { color: #94a3b8; }

        .form-field-label {
          display: block;
          font-size: 12.5px;
          font-weight: 700;
          margin-bottom: 7px;
        }

        .dark-theme .form-field-label { color: #cbd5e1; }
        .light-theme .form-field-label { color: #334155; }

        .custom-form-input,
        .custom-form-select,
        .custom-form-textarea {
          width: 100%;
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 14px;
          outline: none;
          transition: all 0.25s ease;
          box-sizing: border-box;
          font-family: inherit;
        }

        .dark-theme .custom-form-input,
        .dark-theme .custom-form-select,
        .dark-theme .custom-form-textarea {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #f1f5f9;
        }

        .dark-theme .custom-form-input:focus,
        .dark-theme .custom-form-select:focus,
        .dark-theme .custom-form-textarea:focus {
          border-color: #2c73d9;
          box-shadow: 0 0 0 3px rgba(44, 115, 217, 0.25);
        }

        .light-theme .custom-form-input,
        .light-theme .custom-form-select,
        .light-theme .custom-form-textarea {
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.12);
          color: #0f172a;
        }

        .light-theme .custom-form-input:focus,
        .light-theme .custom-form-select:focus,
        .light-theme .custom-form-textarea:focus {
          border-color: #2c73d9;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(44, 115, 217, 0.12);
        }

        .custom-form-textarea {
          resize: vertical;
        }

        .form-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          padding-top: 10px;
        }

        .form-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
        }

        .form-nda-text {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
        }

        .dark-theme .form-nda-text { color: #64748b; }
        .light-theme .form-nda-text { color: #64748b; }

        .form-success-state {
          padding: 30px 10px;
        }

        .success-icon-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .dark-theme .success-icon-circle { background: rgba(16, 185, 129, 0.12); }
        .light-theme .success-icon-circle { background: #ecfdf5; }

        .success-title {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .dark-theme .success-title { color: #f8fafc; }
        .light-theme .success-title { color: #0f172a; }

        .success-text {
          font-size: 14.5px;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto 24px;
        }

        .dark-theme .success-text { color: #94a3b8; }
        .light-theme .success-text { color: #475569; }

        .success-details-card {
          padding: 18px;
          border-radius: 12px;
          text-align: left;
          max-width: 480px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 13px;
        }

        .dark-theme .success-details-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          color: #cbd5e1;
        }

        .light-theme .success-details-card {
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.07);
          color: #334155;
        }

        /* FAQ Section */
        .faq-section {
          padding: 75px 0 80px;
        }

        .dark-theme .faq-section { background: #080f1d; }
        .light-theme .faq-section { background: #f8fafc; }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-item-card {
          border-radius: 14px;
          padding: 22px 24px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .dark-theme .faq-item-card {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .light-theme .faq-item-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.07);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }

        .dark-theme .faq-item-card:hover {
          border-color: rgba(44, 115, 217, 0.4);
        }

        .light-theme .faq-item-card:hover {
          border-color: rgba(44, 115, 217, 0.35);
        }

        .active-faq {
          border-color: #2c73d9 !important;
        }

        .dark-theme .active-faq { background: rgba(44, 115, 217, 0.06); }
        .light-theme .active-faq { background: #f0f7ff; }

        .faq-question-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .faq-question-text {
          font-size: 16px;
          font-weight: 700;
          margin: 0;
          line-height: 1.4;
        }

        .dark-theme .faq-question-text { color: #f1f5f9; }
        .light-theme .faq-question-text { color: #0f172a; }

        .faq-chevron {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .dark-theme .faq-chevron { background: rgba(255, 255, 255, 0.05); color: #94a3b8; }
        .light-theme .faq-chevron { background: #f1f5f9; color: #475569; }

        .faq-chevron.rotate {
          transform: rotate(180deg);
          color: #2c73d9;
        }

        .faq-answer-body {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid;
        }

        .dark-theme .faq-answer-body { border-color: rgba(255, 255, 255, 0.06); }
        .light-theme .faq-answer-body { border-color: rgba(0, 0, 0, 0.06); }

        .faq-answer-text {
          font-size: 14.5px;
          line-height: 1.75;
          margin: 0;
        }

        .dark-theme .faq-answer-text { color: #94a3b8; }
        .light-theme .faq-answer-text { color: #334155; }

        /* Bottom CTA Banner */
        .bottom-cta-section {
          padding: 20px 0 60px;
        }

        .cta-banner-box {
          border-radius: 24px;
          padding: 48px 42px;
          position: relative;
          overflow: hidden;
        }

        .dark-theme .cta-banner-box {
          background: linear-gradient(135deg, rgba(44, 115, 217, 0.16) 0%, rgba(139, 92, 246, 0.12) 100%);
          border: 1.5px solid rgba(44, 115, 217, 0.3);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        }

        .light-theme .cta-banner-box {
          background: linear-gradient(135deg, #f0f7ff 0%, #ede9fe 100%);
          border: 1.5px solid rgba(44, 115, 217, 0.2);
          box-shadow: 0 8px 30px rgba(44, 115, 217, 0.1);
        }

        .cta-banner-title {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 800;
          margin-bottom: 10px;
        }

        .dark-theme .cta-banner-title { color: #f8fafc; }
        .light-theme .cta-banner-title { color: #0f172a; }

        .cta-banner-desc {
          font-size: 15.5px;
          margin: 0;
        }

        .dark-theme .cta-banner-desc { color: #94a3b8; }
        .light-theme .cta-banner-desc { color: #475569; }

        /* Responsive */
        @media (max-width: 991px) {
          .map-hud-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .hud-clocks {
            width: 100%;
            justify-content: space-between;
          }
          .geo-controls-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .map-view-toggle {
            width: 100%;
            justify-content: space-between;
          }
          .toggle-pill-btn {
            flex: 1;
            justify-content: center;
          }
          .form-card-container {
            padding: 26px 20px;
          }
          .cta-banner-box {
            padding: 36px 24px;
          }
        }

        @media (max-width: 576px) {
          .hero-headline {
            font-size: 2rem;
          }
          .hub-action-row {
            grid-template-columns: 1fr;
          }
          .form-submit-row {
            flex-direction: column;
            align-items: stretch;
          }
          .form-submit-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
