import React from 'react'
import { Bell, BellDotIcon } from 'lucide-react';
import { Button } from './ui/button';
type Props = {}

function NotificationBox({ }: Props) {
    return (
        <div>
            <Button
                variant="outline"
                size="icon">
                <Bell />
            </Button>
        </div>
    )
}

export default NotificationBox