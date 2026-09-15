import { useState } from 'react';
import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router';
import { supabase } from '../lib/supabase';
import { type Locale, translations } from '../lib/i18n';

export const Route = createFileRoute('/auth')({
  component: AuthPage,
});

export function AuthPage() {
  const search = useSearch({ from: '/auth' }) as { mode?: 'login' | 'register'; package?: string };
  const navigate = useNavigate();

  const [tab, setTab] = useState<'login' | 'register'>(search.mode === 'login' ? 'login' : 'register');
  const [locale] = useState<Locale>('om');
  const t = translations[locale].auth;

  // Sign up fields
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [job, setJob] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [educationalStatus, setEducationalStatus] = useState('High School');
  const [referralUsername, setReferralUsername] = useState('');
  const [password, setPassword] = useState('');

  // Login fields
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Status indicators
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            work_job: job,
            age: age ? parseInt(age, 10) : null,
            phone,
            account_number: accountNumber,
            address,
            gender,
            educational_status: educationalStatus,
            referral_username: referralUsername.trim() || null,
            selected_package: search.package || null,
          },
        },
      });

      if (error) throw error;

      if (data.session) {
        navigate({ to: '/dashboard' });
      } else {
        setSuccessMessage("Galmee milkaa'ee jira! Imeelii keessan mirkaneessaa (Check your email to confirm).");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Rakkoon uumameera (An error occurred)");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });

      if (error) throw error;

      if (data.session) {
        navigate({ to: '/dashboard' });
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Imeelii ykn jecha icchiitii dogoggora (Invalid login details)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4 py-12">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-[#0047cc] text-white font-black rounded-lg w-9 h-9 flex items-center justify-center text-lg shadow-sm">
          J
        </div>
        <span className="text-2xl font-bold tracking-tight text-slate-800">Journex</span>
      </div>

      <div className="w-full max-w-xl bg-white border border-slate-200/90 rounded-2xl shadow-xl p-8">
        <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => { setTab('login'); setErrorMessage(null); }}
            className={`w-1/2 py-2 text-xs font-semibold rounded-lg transition ${
              tab === 'login' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.loginTab}
          </button>
          <button
            type="button"
            onClick={() => { setTab('register'); setErrorMessage(null); }}
            className={`w-1/2 py-2 text-xs font-semibold rounded-lg transition ${
              tab === 'register' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.registerTab}
          </button>
        </div>

        {errorMessage && (
          <div className="mb-5 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="mb-5 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
            {successMessage}
          </div>
        )}

        {tab === 'register' ? (
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">{t.title}</h2>
            <p className="text-xs text-slate-500 mb-6">{t.subtitle}</p>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.firstName} *</label>
                  <input required value={firstName} onChange={e => setFirstName(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.middleName}</label>
                  <input value={middleName} onChange={e => setMiddleName(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.lastName} *</label>
                  <input required value={lastName} onChange={e => setLastName(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.job}</label>
                  <input value={job} onChange={e => setJob(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.age}</label>
                  <input type="number" min="12" max="100" value={age} onChange={e => setAge(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.phone} *</label>
                  <input required placeholder="+251..." value={phone} onChange={e => setPhone(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.accNo}</label>
                  <input value={accountNumber} onChange={e => setAccountNumber(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.address}</label>
                  <input value={address} onChange={e => setAddress(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.email} *</label>
                  <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.gender}</label>
                  <select value={gender} onChange={e => setGender(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.education}</label>
                  <select value={educationalStatus} onChange={e => setEducationalStatus(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none">
                    <option value="High School">High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Degree">Degree</option>
                    <option value="Masters">Masters / Above</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.refUsername}</label>
                  <input value={referralUsername} onChange={e => setReferralUsername(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.password} *</label>
                  <input type="password" required minLength={6} value={password} onChange={e => setPassword(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0047cc] hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 rounded-lg text-xs tracking-wide transition mt-2 cursor-pointer"
              >
                {loading ? "Uumaa jira..." : t.submit}
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">Welcome back</h2>
            <p className="text-xs text-slate-500 mb-6">Log into your Journex learning and partner account.</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0047cc] hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 rounded-lg text-xs tracking-wide transition mt-2 cursor-pointer"
              >
                {loading ? "Seenaa jira..." : "Log in"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}