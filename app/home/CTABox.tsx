"use client";
import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";
import Cookies from 'js-cookie';

export default function CTABox() {
  const privy = usePrivy();
  const router = useRouter();
  // const handleLogin = useCallback(() => privy.login(), [privy]);
  useEffect(() => {
    if (privy?.ready) {
      if (privy.authenticated) {
        localStorage.setItem('useremail', privy.user?.email?.address ?? "Guest");
        Cookies.set('privy-authenticated', 'true', { path: '/', expires: 1 });
        router.push('/dashboard');
      }
    }
  
  return (
    <section>
      <div className="mx-auto container max-w-[1128px] px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          
        >
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-offbit max-w-[750px] min-h-[96px] text-5xl text-center text-white">
              <TypingAnimation startOnView={false}>
                SELF EVOLVING AGI THAT HELPS YOU COMPLETE MUNDANE TASKS
              </TypingAnimation>
            </h2>

            <p className="my-4 text-center text-white/75">
              The autoagentic AGI. Almaze is a self-evolving AGI made of agents
              to complete tasks for a user.
            </p>
          </div>

          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={3}
            gridGap={5}
            maxOpacity={0.25}
            flickerChance={0.1}
            width={1064}
            height={346}
          />
        </motion.div>
      </div>
    </section>
  );
}
