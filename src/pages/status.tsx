import { motion } from 'framer-motion';
import { BarChartHorizontal, CheckCircle2, AlertTriangle, XCircle, Wrench } from 'lucide-react';
import { useState } from 'react';

// Type for service status
type Status = 'Operational' | 'Degraded Performance' | 'Partial Outage' | 'Major Outage' | 'Under Maintenance';

// Service status data (Placeholder)
const servicesStatus: { name: string; description: string; status: Status }[] = [
    { name: 'Website & Client Portal', description: 'Access to the main website and client panel.', status: 'Operational' },
    { name: 'Game Control Panel', description: 'Management panel for game servers.', status: 'Operational' },
    { name: 'Service API', description: 'API endpoints for automation and services.', status: 'Degraded Performance' },
    { name: 'Server Node - USA', description: 'Server infrastructure in the United States location.', status: 'Operational' },
    { name: 'Server Node - Netherlands', description: 'Server infrastructure in the Netherlands location.', status: 'Under Maintenance' },
    { name: 'Database & Storage', description: 'Main database systems and data storage.', status: 'Operational' },
    { name: 'Support Services', description: 'Ticketing system and live chat.', status: 'Partial Outage' },
];

// Incident history data (Placeholder)
const incidentHistory = [
    { 
        date: 'September 28, 2025',
        title: 'API Performance Issues',
        status: 'Investigating',
        updates: [
            { time: '10:45 (UTC+7)', message: 'We are currently investigating reports of high latency on some API endpoints. We will provide an update as soon as possible.' },
            { time: '10:30 (UTC+7)', message: 'The issue was first detected by our monitoring system.' }
        ]
    },
    {
        date: 'September 27, 2025',
        title: 'Emergency Maintenance on Netherlands Node',
        status: 'Resolved',
        updates: [
            { time: '05:00 (UTC+7)', message: 'Maintenance has been completed, and all services on the Netherlands node have been fully restored. We will continue to monitor the situation.' },
            { time: '02:00 (UTC+7)', message: 'We performed emergency maintenance on one of the hosts in the Netherlands node to replace a hardware component.' },
        ]
    },
];

// Helper for status styling
const getStatusProps = (status: Status) => {
    switch (status) {
        case 'Operational':
            return { color: 'text-green-400', Icon: CheckCircle2, label: 'Operational' };
        case 'Degraded Performance':
            return { color: 'text-yellow-400', Icon: AlertTriangle, label: 'Degraded Performance' };
        case 'Partial Outage':
            return { color: 'text-orange-400', Icon: AlertTriangle, label: 'Partial Outage' };
        case 'Major Outage':
            return { color: 'text-red-500', Icon: XCircle, label: 'Major Outage' };
        case 'Under Maintenance':
            return { color: 'text-blue-400', Icon: Wrench, label: 'Under Maintenance' };
        default:
            return { color: 'text-gray-400', Icon: CheckCircle2, label: 'Unknown' };
    }
};

const StatusPage = () => {
    const overallStatus = servicesStatus.some(s => s.status !== 'Operational') ? 'Some systems are experiencing issues' : 'All Systems Operational';

    return (
        <div className="min-h-screen text-white" style={{ backgroundImage: `url('/background.png')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="container mx-auto px-4 py-20 pt-32">

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-12">
                    <BarChartHorizontal className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold">Service Status</h1>
                    <p className="text-gray-300 mt-2">Real-time updates on the availability of our services.</p>
                </motion.div>

                {/* Overall Status */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                    className={`max-w-4xl mx-auto p-4 rounded-lg mb-12 border ${overallStatus.includes('All') ? 'bg-green-500/10 border-green-400' : 'bg-yellow-500/10 border-yellow-400'}`}
                >
                    <p className={`font-bold text-center ${overallStatus.includes('All') ? 'text-green-300' : 'text-yellow-300'}`}>{overallStatus}</p>
                </motion.div>

                {/* Service Status List */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                    className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 divide-y divide-gray-700"
                >
                    {servicesStatus.map((service, index) => {
                        const { color, Icon, label } = getStatusProps(service.status);
                        return (
                            <div key={index} className="p-4 flex flex-col md:flex-row justify-between items-center">
                                <div>
                                    <h2 className="font-bold text-lg">{service.name}</h2>
                                    <p className="text-sm text-gray-400">{service.description}</p>
                                </div>
                                <div className={`flex items-center gap-2 font-semibold ${color} mt-2 md:mt-0`}>
                                    <Icon className="w-5 h-5" />
                                    <span>{label}</span>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Incident History */}
                <div className="max-w-4xl mx-auto mt-20">
                    <h2 className="text-3xl font-bold text-center mb-10">Incident History</h2>
                    <div className="space-y-8">
                        {incidentHistory.map((incident, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-xl text-blue-300">{incident.title}</h3>
                                        <p className="text-sm text-gray-400">{incident.date}</p>
                                    </div>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${incident.status === 'Resolved' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                                        {incident.status}
                                    </span>
                                </div>
                                <div className="border-l-2 border-gray-600 pl-4 space-y-3">
                                    {incident.updates.map((update, idx) => (
                                        <div key={idx} className="relative">
                                            <div className="absolute -left-[27px] top-1 w-3 h-3 bg-gray-500 rounded-full border-2 border-gray-800"></div>
                                            <p className="text-sm text-gray-400">{update.time}</p>
                                            <p className="text-gray-200">{update.message}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StatusPage;