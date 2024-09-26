import { ReactNode } from 'react';

interface CustomCardProps {
    children: ReactNode;
}

const CustomCard = ({ children }: CustomCardProps) => {
    return (
        <div className=" cardBorder shadow-lg rounded-lg p-2 m-2 min-w-72">
        {children}
        </div>
    );
};

export default CustomCard;