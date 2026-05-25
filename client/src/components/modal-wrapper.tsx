'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  backUrl: string;
  dialogTitle: string;
  dialogDescription: string;
  children: ReactNode;
}

export default function ModalWrapper({ backUrl, dialogTitle, dialogDescription, children }: Props) {
  const router = useRouter();

  function handleOpenChange(open: boolean) {
    if (!open) {
      router.push(backUrl);
    }
  }
  
  return (
    <Dialog
      defaultOpen
      onOpenChange={handleOpenChange}
    >
      <DialogContent className="sm:max-w-6/10">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription className="sr-only">
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6 max-h-[80vh] no-scrollbar overflow-y-auto">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
