import * as React from "react";
import { ChevronRight,  LucideIcon } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const SidebarContext = React.createContext({
  open: false,
  setOpen: () => {},
});

function Sidebar({ open: openProp, onOpenChange, className, ...props }) {
  const [open, setOpen] = React.useState(openProp ?? false);
  const value = React.useMemo(
    () => ({ open, setOpen: onOpenChange ?? setOpen }),
    [open, onOpenChange]
  );

  return (
    <SidebarContext.Provider value={value}>
      <div
        data-state={open ? "open" : "closed"}
        className={cn("group/sidebar flex h-full", className)}
        {...props}
      />
    </SidebarContext.Provider>
  );
}

function SidebarTrigger({ className, ...props }) {
  const { open, setOpen } = React.useContext(SidebarContext);
  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn(
        "flex items-center justify-center rounded-md border p-2 hover:bg-accent",
        className
      )}
      {...props}
    >
      <ChevronRight
        className={cn(
          "h-4 w-4 transition-transform",
          open && "rotate-90"
        )}
      />
    </button>
  );
}

const sidebarVariants = cva(
  "flex flex-col h-full border-r bg-background transition-all",
  {
    variants: {
      open: {
        true: "w-64",
        false: "w-16",
      },
    },
    defaultVariants: {
      open: false,
    },
  }
);

function SidebarContent({ className, ...props }) {
  const { open } = React.useContext(SidebarContext);
  return (
    <div className={cn(sidebarVariants({ open }), className)} {...props} />
  );
}

function SidebarHeader({ className, ...props }) {
  return (
    <div
      className={cn("border-b p-4 text-sm font-medium", className)}
      {...props}
    />
  );
}

function SidebarFooter({ className, ...props }) {
  return (
    <div className={cn("border-t p-4 text-xs text-muted-foreground", className)} {...props} />
  );
}

function SidebarGroup({ className, ...props }) {
  return (
    <div className={cn("flex flex-col p-2 gap-1", className)} {...props} />
  );
}

function SidebarGroupLabel({ className, ...props }) {
  return (
    <div
      className={cn("px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground", className)}
      {...props}
    />
  );
}

function SidebarGroupContent({ className, ...props }) {
  return (
    <div className={cn("flex flex-col", className)} {...props} />
  );
}

function SidebarMenu({ className, ...props }) {
  return (
    <nav className={cn("flex flex-col gap-1", className)} {...props} />
  );
}

function SidebarMenuItem({ className, ...props }) {
  return <div className={cn("flex items-center", className)} {...props} />;
}

function SidebarMenuButton({ asChild, className, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuAction({ className, ...props }) {
  return (
    <button
      className={cn(
        "ml-auto rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-accent",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuBadge({ className, ...props }) {
  return (
    <span
      className={cn(
        "ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary",
        className
      )}
      {...props}
    />
  );
}

function SidebarSeparator({ className, ...props }) {
  return (
    <hr
      className={cn("my-2 border-border", className)}
      {...props}
    />
  );
}

function SidebarInset({ className, ...props }) {
  return <div className={cn("flex-1 overflow-auto p-4", className)} {...props} />;
}

function SidebarInput({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className
      )}
      {...props}
    />
  );
}

function SidebarLabel({ className, ...props }) {
  return (
    <label className={cn("text-xs text-muted-foreground", className)} {...props} />
  );
}

function SidebarRail({ className, ...props }) {
  return (
    <div className={cn("w-1 bg-border", className)} {...props} />
  );
}

function SidebarMain({ className, ...props }) {
  return <main className={cn("flex-1 p-4", className)} {...props} />;
}

function SidebarTriggerMobile({ className, ...props }) {
  return (
    <button
      className={cn("lg:hidden flex items-center justify-center p-2", className)}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}

function SidebarTriggerDesktop({ className, ...props }) {
  return (
    <button
      className={cn("hidden lg:flex items-center justify-center p-2", className)}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarSeparator,
  SidebarInset,
  SidebarInput,
  SidebarLabel,
  SidebarRail,
  SidebarMain,
  SidebarTrigger,
  SidebarTriggerDesktop,
  SidebarTriggerMobile,
};
