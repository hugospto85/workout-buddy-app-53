import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import { Dumbbell, ArrowRight, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ABC_PLAN, addAbcToStorage } from '@/data/abcPlan';
import { setReturnPath } from '@/lib/authReturn';

const TITLE = 'Treino ABC Completo: Divisão, Ficha Pronta e Guia | H&B Fitness';
const DESC = 'Descubra como funciona a divisão de Treino ABC, os melhores exercícios para cada dia e adicione uma ficha completa direto no aplicativo.';
const URL = 'https://workout-buddy-app-53.lovable.app/treino-abc';
const PENDING = 'pending-abc-add';

const TreinoABC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const finishAdd = () => {
    addAbcToStorage();
    localStorage.removeItem(PENDING);
    toast({ title: 'Treino ABC adicionado!', description: 'Os treinos A, B e C já estão no seu perfil.' });
    navigate('/');
  };

  // After returning from login, complete a pending add automatically
  useEffect(() => {
    if (!localStorage.getItem(PENDING)) return;
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) finishAdd();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAdd = async () => {
    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    setLoading(false);
    if (session?.user) return finishAdd();
    localStorage.setItem(PENDING, '1');
    setReturnPath('/treino-abc');
    navigate('/auth');
  };

  const Cta = ({ big }: { big?: boolean }) => (
    <Button size="lg" onClick={handleAdd} disabled={loading} className={big ? 'h-14 px-8 text-base font-semibold' : 'h-12 px-6 font-semibold'}>
      Adicionar Treino ABC ao meu perfil <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Helmet>

      <header className="container max-w-5xl flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl tracking-wide">
          <Dumbbell className="h-6 w-6 text-primary" /> H&B Fitness
        </Link>
        <Button variant="ghost" asChild><Link to="/">Abrir app</Link></Button>
      </header>

      <main>
        {/* Hero */}
        <section className="container max-w-5xl py-16 md:py-24 text-center">
          <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm text-primary mb-6">Ficha pronta e gratuita</span>
          <h1 className="font-display text-5xl md:text-7xl tracking-wide leading-none mb-6">
            Guia Definitivo do <span className="text-primary">Treino ABC</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
            O Treino ABC é uma das divisões mais eficientes para hipertrofia e definição: cada grupo muscular recebe estímulo intenso
            e tempo de recuperação ideal, com uma rotina simples de seguir na academia.
          </p>
          <Cta big />
        </section>

        {/* Split */}
        <section className="container max-w-5xl py-12">
          <h2 className="font-display text-4xl tracking-wide mb-2">Como funciona a divisão ABC</h2>
          <p className="text-muted-foreground mb-8">Três treinos diferentes em sequência. Repita o ciclo A → B → C de 3 a 6 vezes por semana.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {ABC_PLAN.map((d) => (
              <article key={d.letter} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary font-display text-3xl text-primary-foreground">{d.letter}</div>
                <h3 className="text-xl font-semibold mb-1">{d.muscles}</h3>
                <p className="text-primary text-sm font-medium">{d.focus}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Sample plan */}
        <section className="container max-w-5xl py-12">
          <h2 className="font-display text-4xl tracking-wide mb-2">Ficha sugerida de exemplo</h2>
          <p className="text-muted-foreground mb-8">Exercícios clássicos com séries e repetições recomendadas. Descanso de 60 a 90 segundos entre séries.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {ABC_PLAN.map((d) => (
              <article key={d.letter} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-2xl tracking-wide mb-1">{d.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{d.muscles}</p>
                <ul className="space-y-3">
                  {d.exercises.map((ex) => (
                    <li key={ex.name} className="flex items-start justify-between gap-3 border-b border-border/60 pb-3 last:border-0">
                      <span className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{ex.name}</span>
                      <span className="whitespace-nowrap text-sm font-semibold text-primary">
                        {ex.sets}x{ex.reps}{ex.name.includes('Prancha') ? 's' : ''}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="container max-w-5xl py-16">
          <div className="rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-card to-card p-10 md:p-14 text-center">
            <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-4">Comece a treinar hoje</h2>
            <p className="mx-auto max-w-xl text-muted-foreground mb-8">
              Adicione a ficha ABC ao H&B Fitness e acompanhe séries, descanso com aviso automático e o tempo total de cada treino.
            </p>
            <Cta big />
          </div>
        </section>
      </main>

      <footer className="container max-w-5xl py-8 text-center text-sm text-muted-foreground">© H&B Fitness</footer>
    </div>
  );
};

export default TreinoABC;
