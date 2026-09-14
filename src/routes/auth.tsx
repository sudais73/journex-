import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { type Locale, translations } from '../lib/i18n';

export function AuthPage() {
  const [tab, setTab] = useState<'login' | 'register'>('register');
  const [locale] = useState<Locale>('om');
  const t = translations[locale].auth;

  // Form state
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    job: '',
    age: '',
    phone: '',
    accountNumber: '',
    address: '',
    email: '',
    gender: 'male',
    educationalStatus: 'High School',
    referralUsername: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    // 1. Sign up Supabase user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (authError || !authData.user) {
      setMsg(authError?.message || "Registration failed");
      setLoading(false);
      return;
    }

    // 2. Generate referral username (e.g., first + random 4 digits)
    const generatedUsername = `${form.firstName.toLowerCase()}${Math.floor(1000 + Math.random() * 9000)}`;

    // 3. Store the user profile
    const { error: profileError } = await supabase.from('profiles').insert([
      {
        id: authData.user.id,
        first_name: form.firstName,
        middle_name: form.middleName,
        last_name: form.lastName,
        work_job: form.job,
        age: parseInt(form.age) || null,
        phone: form.phone,
        account_number: form.accountNumber,
        address: form.address,
        gender: form.gender,
        educational_status: form.educationalStatus,
        referral_username: form.referralUsername || null,
        generated_username: generatedUsername,
        role: 'partner',
        pjp: 0,
        tjp: 0
      }
    ]);

    if (profileError) {
      setMsg(profileError.message);
    } else {
      setMsg("Account created successfully! Check your inbox or proceed to login.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      {/* Brand Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-blue-600 text-white font-black rounded-lg w-8 h-8 flex items-center justify-center text-lg shadow-sm">
          J
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-800">Journex</span>
      </div>

      {/* Main Auth Card */}
      <div className="w-full max-w-xl bg-white border border-slate-200/80 rounded-2xl shadow-xl p-8">
        {/* Toggle Switcher */}
        <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => setTab('login')}
            className={`w-1/2 py-2 text-xs font-semibold rounded-lg transition ${
              tab === 'login' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.loginTab}
          </button>
          <button
            type="button"
            onClick={() => setTab('register')}
            className={`w-1/2 py-2 text-xs font-semibold rounded-lg transition ${
              tab === 'register' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.registerTab}
          </button>
        </div>

        {tab === 'register' ? (
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">{t.title}</h2>
            <p className="text-xs text-slate-500 mb-6">{t.subtitle}</p>

            {msg && <p className="text-xs p-3 rounded bg-blue-50 text-blue-700 mb-4">{msg}</p>}

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.firstName} *</label>
                  <input required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.middleName}</label>
                  <input value={form.middleName} onChange={e => setForm({ ...form, middleName: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.lastName} *</label>
                  <input required value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.job}</label>
                  <input value={form.job} onChange={e => setForm({ ...form, job: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.age}</label>
                  <input type="number" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.phone} *</label>
                  <input required placeholder="+251..." value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.accNo}</label>
                  <input value={form.accountNumber} onChange={e => setForm({ ...form, accountNumber: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.address}</label>
                  <input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.email} *</label>
                  <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.gender}</label>
                  <select value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.education}</label>
                  <select value={form.educationalStatus} onChange={e => setForm({ ...form, educationalStatus: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none">
                    <option value="High School">High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Degree">Degree / University</option>
                    <option value="Masters">Masters / PhD</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.refUsername}</label>
                  <input value={form.referralUsername} onChange={e => setForm({ ...form, referralUsername: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">{t.password} *</label>
                  <input type="password" required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0047cc] hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg text-sm transition mt-4"
              >
                {loading ? "Processing..." : t.submit}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center text-xs text-slate-500">
            {/* Standard Login view */}
            <input type="email" placeholder="Email" className="w-full border rounded-lg px-3 py-2 text-xs mb-3" />
            <input type="password" placeholder="Password" className="w-full border rounded-lg px-3 py-2 text-xs mb-4" />
            <button className="w-full bg-[#0047cc] text-white font-semibold py-2 rounded-lg text-xs">Log in</button>
          </div>
        )}
      </div>
    </div>
  );
}