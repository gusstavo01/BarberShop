import { CardDashboard, CardDashboardTitle, Service, ServiceItem } from "./style"
import React from 'react';

interface CardDashboardProps {
    title: string;
    service1: { name: string; content: string };
    service2: { name: string; content: string };
    service3: { name: string; content: string };
  }

export const CardDashboardComponent = ({title, service1, service2,service3}: CardDashboardProps) => {
    return(
        <CardDashboard >
            <CardDashboardTitle>
               {title}
            </CardDashboardTitle>
            <ServiceItem>
                <Service>{service1.name}:</Service> <span>{service1.content}</span>
            </ServiceItem>
            <ServiceItem>
                <Service>{service2.name}:</Service> <span>{service2.content}</span>
            </ServiceItem>
            <ServiceItem>
                <Service>{service3.name}:</Service> <span>{service3.content}</span>
            </ServiceItem>
        </CardDashboard>
    )
}