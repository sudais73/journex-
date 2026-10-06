import {
  createFileRoute,
  Outlet,
  Link,
  redirect,
  useRouter,
} from '@tanstack/react-router';
import { supabase } from '../lib/supabase';
import { useState } from 'react';

// ─────────────────────────────────────────────
// Route Definition
// ─────────────────────────────────────────────

export const Route = createFileRoute('/dashboard')({
  beforeLoad: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      throw redirect({
        to: '/auth',
        search: { mode: 'login' },
      });
    }

    // Fetch user profile
    let { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();

    // Fallback: If for any reason trigger didn't create it, insert default
    if (!profile) {
      const randSuffix = Math.floor(1000 + Math.random() * 9000).toString();
      const generatedUsername = `user${randSuffix}`;

      const { data: newProfile } = await supabase
        .from('profiles')
        .insert({
          id: user.id,
          first_name: user.user_metadata?.first_name || 'User',
          last_name: user.user_metadata?.last_name || 'Member',
          phone: user.user_metadata?.phone || '',
          generated_username: generatedUsername,
          role: 'partner',
        })
        .select()
        .single();

      profile = newProfile;
    }

    return { user, profile };
  },
  component: DashboardLayoutComponent,
});

// ─────────────────────────────────────────────
// Dashboard Layout
// ─────────────────────────────────────────────

function DashboardLayoutComponent() {
  const { profile } = Route.useRouteContext();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.navigate({ to: '/' });
  };

  const navLinks = [
    {
      to: '/dashboard',
      label: 'Overview',
      icon: '📊',
    },
    {
      to: '/dashboard/packages',
      label: 'Packages',
      icon: '📦',
    },
    {
      to: '/dashboard/team',
      label: 'Team & Points',
      icon: '👥',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* ─────────────────────────────────────────
          MOBILE OVERLAY
      ───────────────────────────────────────── */}

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ─────────────────────────────────────────
          SIDEBAR
      ───────────────────────────────────────── */}

      <aside
        className={`
          fixed md:static
          inset-y-0 left-0
          z-50
          w-64
          bg-[#0b192e]
          text-slate-300
          flex flex-col justify-between
          border-r border-slate-800
          shrink-0

          transform
          transition-transform
          duration-300
          ease-in-out

          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >

        <div>

          {/* Logo Header */}
          <div className="p-6 flex items-center justify-between border-b border-slate-800">

            <div className="flex items-center gap-3">
              <div className="bg-[#0047cc] text-white font-black rounded-lg w-8 h-8 flex items-center justify-center text-base">
                J
              </div>

              <span className="text-lg font-bold text-white tracking-tight">
                Journex
              </span>
            </div>

            {/* Close Button - Mobile */}
            <button
              onClick={() => setOpen(false)}
              className="md:hidden text-slate-400 hover:text-white text-lg"
            >
              ✕
            </button>

          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1.5">

            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{
                  exact: item.to === '/dashboard',
                }}
                activeProps={{
                  className: 'bg-blue-600 text-white shadow-sm',
                }}
                inactiveProps={{
                  className:
                    'text-slate-400 hover:bg-slate-800 hover:text-white',
                }}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}

          </nav>

        </div>

        {/* ─────────────────────────────────────────
            USER PROFILE & LOGOUT
        ───────────────────────────────────────── */}

        <div className="p-4 border-t border-slate-800">

          <div className="bg-slate-900/80 p-3 rounded-xl mb-3 border border-slate-800">

            <p className="text-xs font-bold text-white">
              {profile?.first_name} {profile?.last_name}
            </p>

            <p className="text-[10px] text-slate-400">
              @{profile?.generated_username}
            </p>

            <span
              className={`inline-block mt-2 text-[9px] font-bold px-2 py-0.5 rounded-full ${profile?.is_package_active
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-amber-500/20 text-amber-400'
                }`}
            >
              {profile?.is_package_active
                ? 'Active Partner'
                : 'No Active Course'}
            </span>

          </div>

          <button
            onClick={handleLogout}
            className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-400 hover:bg-rose-950/30 rounded-lg transition"
          >
            <span>🚪</span>
            <span>Sign Out</span>
          </button>

        </div>

      </aside>

      {/* ─────────────────────────────────────────
          MAIN CONTENT AREA
      ───────────────────────────────────────── */}

      <div className="flex-1 flex flex-col min-w-0">

        {/* ─────────────────────────────────────────
            TOP HEADER
        ───────────────────────────────────────── */}

        <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between shrink-0">

          <div className="flex items-center gap-3">

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-slate-600 hover:text-blue-600 text-xl"
            >
              ☰
            </button>

            <h1 className="text-sm font-bold text-slate-800">
              Member Portal
            </h1>

          </div>

          <div className="flex items-center gap-2 text-xs font-semibold">
            {/* BP */}
            <div className="bg-blue-50 border border-blue-200/60 px-2.5 py-1 rounded-xl flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold text-blue-600">BP:</span>
              <span className="text-blue-900 font-extrabold">{profile?.bp ?? 0}</span>
            </div>

            {/* LJP */}
            <div className="bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-xl flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold text-emerald-600">LJP:</span>
              <span className="text-emerald-900 font-extrabold">{profile?.ljp ?? 0}</span>
            </div>

            {/* TJP */}
            <div className="bg-purple-50 border border-purple-200/60 px-2.5 py-1 rounded-xl flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold text-purple-600">TJP:</span>
              <span className="text-purple-900 font-extrabold">{profile?.tjp ?? 0}</span>
            </div>
          </div>

        </header>

        {/* ─────────────────────────────────────────
            CHILD ROUTES OUTLET
        ───────────────────────────────────────── */}

        <main className="flex-1 overflow-y-auto">

          <div className="p-4 md:p-8 max-w-6xl mx-auto w-full">
            <Outlet />
          </div>

        </main>

      </div>

    </div>
  );
}