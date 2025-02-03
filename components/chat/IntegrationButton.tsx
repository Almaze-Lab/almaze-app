import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react"; 

interface IntegrationButtonProps {
  Icon: LucideIcon;
  color: string;
  onClick: () => void;

export const IntegrationButton = ({ Icon, label, color, onClick }: IntegrationButtonProps) => (
    className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 bg-white "
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    <Icon size={24} /> 
);