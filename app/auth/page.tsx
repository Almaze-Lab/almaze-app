"use client"
import { memo, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { usePrivy } from '@privy-io/react-auth';
import { Providers } from '@/components/providers/privy-provider';
import { Mail, ArrowRight, Hexagon, LucideIcon } from 'lucide-react';

interface LoginButtonProps {
  icon: LucideIcon;
  text: string;
  onClick: () => void;
}

interface FeatureCardProps {
  text: string;
}

// Futuristic geometric background
const BackgroundEffect = memo(function BackgroundEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200" />
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                border: '2px solid rgba(0,0,0,1)',
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              <Hexagon className="w-full h-full stroke-current opacity-40" />
            </div>
          ))}
        </div>
      </div>

      {/* Modern gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-gray-200/40 to-transparent rounded-full blur-3xl transform rotate-12 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-200/40 to-transparent rounded-full blur-3xl transform -rotate-12 opacity-60" />
    </div>
  );
});

// Enhanced loading animation
const LoadingSpinner = memo(function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-50 to-gray-50">
      <div className="relative">
        <div className="absolute inset-0 border-2 border-gray-800/20 rounded-lg blur animate-pulse" />
        <div className="relative flex items-center justify-center w-16 h-16">
          <div className="absolute w-full h-full border-t-2 border-gray-800 rounded-full animate-spin" />
          <div className="absolute w-10 h-10 border-t-2 border-gray-800/50 rounded-full animate-spin-slow" />
        </div>
      </div>
    </div>
  );
});

// Enhanced button with modern hover effects
const LoginButton = memo(function LoginButton({ icon: Icon, text, onClick }: LoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full flex items-center justify-between px-6 py-4 rounded-xl
                 bg-gradient-to-r from-gray-700/90 to-gray-600/90 hover:from-gray-800 hover:to-gray-700
                 text-white transform transition-all duration-300
                 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:scale-[1.01]"
    >
      <div className="absolute inset-px rounded-[11px] bg-gradient-to-r from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-center space-x-3 z-10">
        <div className="p-1 rounded-lg bg-white/10">
          <Icon className="w-4 h-4" />
        </div>
        <span className="font-medium tracking-wide">{text}</span>
      </div>
      
      <div className="flex items-center z-10">
        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
});

// Modern feature card
const FeatureCard = memo(function FeatureCard({ text }: FeatureCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-xl blur-sm transform transition-all duration-300 group-hover:scale-105 opacity-0 group-hover:opacity-100" />
      <div className="relative p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm
                    transform transition-all duration-300">
        <p className="text-sm text-gray-600 font-medium">{text}</p>
      </div>
    </div>
  );
});

const LoginContent = memo(function LoginContent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const privy = usePrivy();

  const handleLogin = useCallback(() => privy.login(), [privy]);
  // const handleWalletConnect = useCallback(() => privy.connectWallet(), [privy]);

  useEffect(() => {
    if (privy?.ready) {
      setIsLoading(false);
      if (privy.authenticated) {
        localStorage.setItem('useremail', privy.user?.email?.address ?? "Guest");
        Cookies.set('privy-authenticated', 'true', { path: '/', expires: 1 });
        router.push('/dashboard');
      }
    }
  }, [privy.ready, privy.authenticated, router]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <main className="min-h-screen relative overflow-hidden">
      <BackgroundEffect />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="relative p-8 rounded-2xl overflow-hidden">
            {/* Card backdrop blur effect */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl" />
            
            {/* Content */}
            <div className="relative">
              <div className="text-center mb-10">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-600 mb-3">
                  ALMAZE
                </h1>
                <div className="flex items-center justify-center gap-3 text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-gray-400" />
                  <span className="text-lg tracking-wide">Secure</span>
                  <span className="w-2 h-2 rounded-full bg-gray-400" />
                  <span className="text-lg tracking-wide">Seamless</span>
                  <span className="w-2 h-2 rounded-full bg-gray-400" />
                  <span className="text-lg tracking-wide">Smart</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <LoginButton 
                  icon={Mail} 
                  text="Continue with ALMAZE" 
                  onClick={handleLogin} 
                />
                {/* <LoginButton 
                  icon={Wallet} 
                  text="Connect Wallet" 
                  onClick={handleWalletConnect} 
                /> */}
              </div>

              <div className="text-center">
                <p className="text-gray-500 text-sm">
                  By continuing, you agree to our{' '}
                  <a href="#" className="text-gray-700 hover:text-gray-900 underline underline-offset-4 transition-colors">
                    Terms of Service
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <FeatureCard text="Secure Storage" />
            <FeatureCard text="Fast Transactions" />
            <FeatureCard text="24/7 Support" />
          </div>
        </div>
      </div>
    </main>
  );
});

const Home = memo(function Home() {
  return (
    <Providers>
      <LoginContent />
    </Providers>
  );
});

export default Home;