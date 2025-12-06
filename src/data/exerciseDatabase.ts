// Exercise database compiled from various fitness sources
export interface ExerciseData {
  id: string;
  name: string;
  nameEn?: string;
  category: string;
  equipment?: string;
  muscles: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export const exerciseDatabase: ExerciseData[] = [
  // PEITO (Chest)
  { id: 'chest-1', name: 'Supino Reto com Barra', nameEn: 'Barbell Bench Press', category: 'Peito', equipment: 'Barra', muscles: ['Peitoral Maior', 'Tríceps', 'Deltóide Anterior'] },
  { id: 'chest-2', name: 'Supino Inclinado com Barra', nameEn: 'Incline Barbell Bench Press', category: 'Peito', equipment: 'Barra', muscles: ['Peitoral Superior', 'Tríceps', 'Deltóide Anterior'] },
  { id: 'chest-3', name: 'Supino Declinado com Barra', nameEn: 'Decline Barbell Bench Press', category: 'Peito', equipment: 'Barra', muscles: ['Peitoral Inferior', 'Tríceps'] },
  { id: 'chest-4', name: 'Supino Reto com Halteres', nameEn: 'Dumbbell Bench Press', category: 'Peito', equipment: 'Halteres', muscles: ['Peitoral Maior', 'Tríceps'] },
  { id: 'chest-5', name: 'Supino Inclinado com Halteres', nameEn: 'Incline Dumbbell Press', category: 'Peito', equipment: 'Halteres', muscles: ['Peitoral Superior', 'Tríceps'] },
  { id: 'chest-6', name: 'Crucifixo Reto', nameEn: 'Dumbbell Fly', category: 'Peito', equipment: 'Halteres', muscles: ['Peitoral Maior'] },
  { id: 'chest-7', name: 'Crucifixo Inclinado', nameEn: 'Incline Dumbbell Fly', category: 'Peito', equipment: 'Halteres', muscles: ['Peitoral Superior'] },
  { id: 'chest-8', name: 'Crossover na Polia', nameEn: 'Cable Crossover', category: 'Peito', equipment: 'Polia', muscles: ['Peitoral Maior'] },
  { id: 'chest-9', name: 'Peck Deck', nameEn: 'Pec Deck Machine', category: 'Peito', equipment: 'Máquina', muscles: ['Peitoral Maior'] },
  { id: 'chest-10', name: 'Flexão de Braço', nameEn: 'Push-Up', category: 'Peito', equipment: 'Peso Corporal', muscles: ['Peitoral Maior', 'Tríceps', 'Core'] },
  { id: 'chest-11', name: 'Flexão Diamante', nameEn: 'Diamond Push-Up', category: 'Peito', equipment: 'Peso Corporal', muscles: ['Peitoral Maior', 'Tríceps'] },
  { id: 'chest-12', name: 'Pullover com Halter', nameEn: 'Dumbbell Pullover', category: 'Peito', equipment: 'Halter', muscles: ['Peitoral Maior', 'Dorsal'] },

  // COSTAS (Back)
  { id: 'back-1', name: 'Barra Fixa', nameEn: 'Pull-Up', category: 'Costas', equipment: 'Peso Corporal', muscles: ['Dorsal', 'Bíceps', 'Rombóides'] },
  { id: 'back-2', name: 'Barra Fixa Supinada', nameEn: 'Chin-Up', category: 'Costas', equipment: 'Peso Corporal', muscles: ['Dorsal', 'Bíceps'] },
  { id: 'back-3', name: 'Puxada Frontal', nameEn: 'Lat Pulldown', category: 'Costas', equipment: 'Polia', muscles: ['Dorsal', 'Bíceps'] },
  { id: 'back-4', name: 'Puxada Triângulo', nameEn: 'Close Grip Lat Pulldown', category: 'Costas', equipment: 'Polia', muscles: ['Dorsal', 'Bíceps'] },
  { id: 'back-5', name: 'Remada Curvada com Barra', nameEn: 'Barbell Row', category: 'Costas', equipment: 'Barra', muscles: ['Dorsal', 'Rombóides', 'Bíceps'] },
  { id: 'back-6', name: 'Remada Curvada com Halter', nameEn: 'Dumbbell Row', category: 'Costas', equipment: 'Halter', muscles: ['Dorsal', 'Rombóides'] },
  { id: 'back-7', name: 'Remada Cavalinho', nameEn: 'T-Bar Row', category: 'Costas', equipment: 'Máquina', muscles: ['Dorsal', 'Rombóides'] },
  { id: 'back-8', name: 'Remada Baixa', nameEn: 'Seated Cable Row', category: 'Costas', equipment: 'Polia', muscles: ['Dorsal', 'Rombóides'] },
  { id: 'back-9', name: 'Remada Unilateral na Polia', nameEn: 'Single Arm Cable Row', category: 'Costas', equipment: 'Polia', muscles: ['Dorsal'] },
  { id: 'back-10', name: 'Levantamento Terra', nameEn: 'Deadlift', category: 'Costas', equipment: 'Barra', muscles: ['Eretores', 'Glúteos', 'Isquiotibiais'] },
  { id: 'back-11', name: 'Levantamento Terra Romeno', nameEn: 'Romanian Deadlift', category: 'Costas', equipment: 'Barra', muscles: ['Eretores', 'Isquiotibiais', 'Glúteos'] },
  { id: 'back-12', name: 'Hiperextensão', nameEn: 'Back Extension', category: 'Costas', equipment: 'Banco', muscles: ['Eretores', 'Glúteos'] },
  { id: 'back-13', name: 'Encolhimento de Ombros', nameEn: 'Barbell Shrug', category: 'Costas', equipment: 'Barra', muscles: ['Trapézio'] },
  { id: 'back-14', name: 'Remada Alta', nameEn: 'Upright Row', category: 'Costas', equipment: 'Barra', muscles: ['Trapézio', 'Deltóides'] },

  // OMBROS (Shoulders)
  { id: 'shoulder-1', name: 'Desenvolvimento com Barra', nameEn: 'Overhead Press', category: 'Ombros', equipment: 'Barra', muscles: ['Deltóide Anterior', 'Deltóide Lateral', 'Tríceps'] },
  { id: 'shoulder-2', name: 'Desenvolvimento com Halteres', nameEn: 'Dumbbell Shoulder Press', category: 'Ombros', equipment: 'Halteres', muscles: ['Deltóides', 'Tríceps'] },
  { id: 'shoulder-3', name: 'Desenvolvimento Arnold', nameEn: 'Arnold Press', category: 'Ombros', equipment: 'Halteres', muscles: ['Deltóides'] },
  { id: 'shoulder-4', name: 'Elevação Lateral', nameEn: 'Lateral Raise', category: 'Ombros', equipment: 'Halteres', muscles: ['Deltóide Lateral'] },
  { id: 'shoulder-5', name: 'Elevação Frontal', nameEn: 'Front Raise', category: 'Ombros', equipment: 'Halteres', muscles: ['Deltóide Anterior'] },
  { id: 'shoulder-6', name: 'Crucifixo Inverso', nameEn: 'Reverse Fly', category: 'Ombros', equipment: 'Halteres', muscles: ['Deltóide Posterior', 'Rombóides'] },
  { id: 'shoulder-7', name: 'Face Pull', nameEn: 'Face Pull', category: 'Ombros', equipment: 'Polia', muscles: ['Deltóide Posterior', 'Trapézio'] },
  { id: 'shoulder-8', name: 'Elevação Lateral na Polia', nameEn: 'Cable Lateral Raise', category: 'Ombros', equipment: 'Polia', muscles: ['Deltóide Lateral'] },
  { id: 'shoulder-9', name: 'Desenvolvimento na Máquina', nameEn: 'Machine Shoulder Press', category: 'Ombros', equipment: 'Máquina', muscles: ['Deltóides', 'Tríceps'] },

  // BÍCEPS
  { id: 'biceps-1', name: 'Rosca Direta com Barra', nameEn: 'Barbell Curl', category: 'Bíceps', equipment: 'Barra', muscles: ['Bíceps'] },
  { id: 'biceps-2', name: 'Rosca Alternada com Halteres', nameEn: 'Alternating Dumbbell Curl', category: 'Bíceps', equipment: 'Halteres', muscles: ['Bíceps'] },
  { id: 'biceps-3', name: 'Rosca Martelo', nameEn: 'Hammer Curl', category: 'Bíceps', equipment: 'Halteres', muscles: ['Bíceps', 'Braquial'] },
  { id: 'biceps-4', name: 'Rosca Concentrada', nameEn: 'Concentration Curl', category: 'Bíceps', equipment: 'Halter', muscles: ['Bíceps'] },
  { id: 'biceps-5', name: 'Rosca Scott', nameEn: 'Preacher Curl', category: 'Bíceps', equipment: 'Barra EZ', muscles: ['Bíceps'] },
  { id: 'biceps-6', name: 'Rosca na Polia', nameEn: 'Cable Curl', category: 'Bíceps', equipment: 'Polia', muscles: ['Bíceps'] },
  { id: 'biceps-7', name: 'Rosca Inclinada', nameEn: 'Incline Dumbbell Curl', category: 'Bíceps', equipment: 'Halteres', muscles: ['Bíceps'] },
  { id: 'biceps-8', name: 'Rosca Spider', nameEn: 'Spider Curl', category: 'Bíceps', equipment: 'Barra EZ', muscles: ['Bíceps'] },
  { id: 'biceps-9', name: 'Rosca 21', nameEn: '21s Curl', category: 'Bíceps', equipment: 'Barra', muscles: ['Bíceps'] },

  // TRÍCEPS
  { id: 'triceps-1', name: 'Tríceps Pulley', nameEn: 'Tricep Pushdown', category: 'Tríceps', equipment: 'Polia', muscles: ['Tríceps'] },
  { id: 'triceps-2', name: 'Tríceps Corda', nameEn: 'Rope Pushdown', category: 'Tríceps', equipment: 'Polia', muscles: ['Tríceps'] },
  { id: 'triceps-3', name: 'Tríceps Testa', nameEn: 'Skull Crusher', category: 'Tríceps', equipment: 'Barra EZ', muscles: ['Tríceps'] },
  { id: 'triceps-4', name: 'Tríceps Francês', nameEn: 'Overhead Tricep Extension', category: 'Tríceps', equipment: 'Halter', muscles: ['Tríceps'] },
  { id: 'triceps-5', name: 'Tríceps Coice', nameEn: 'Tricep Kickback', category: 'Tríceps', equipment: 'Halter', muscles: ['Tríceps'] },
  { id: 'triceps-6', name: 'Mergulho em Barras Paralelas', nameEn: 'Dips', category: 'Tríceps', equipment: 'Peso Corporal', muscles: ['Tríceps', 'Peitoral'] },
  { id: 'triceps-7', name: 'Mergulho no Banco', nameEn: 'Bench Dips', category: 'Tríceps', equipment: 'Banco', muscles: ['Tríceps'] },
  { id: 'triceps-8', name: 'Supino Fechado', nameEn: 'Close Grip Bench Press', category: 'Tríceps', equipment: 'Barra', muscles: ['Tríceps', 'Peitoral'] },

  // PERNAS - Quadríceps
  { id: 'legs-1', name: 'Agachamento Livre', nameEn: 'Barbell Squat', category: 'Quadríceps', equipment: 'Barra', muscles: ['Quadríceps', 'Glúteos', 'Core'] },
  { id: 'legs-2', name: 'Agachamento Frontal', nameEn: 'Front Squat', category: 'Quadríceps', equipment: 'Barra', muscles: ['Quadríceps', 'Core'] },
  { id: 'legs-3', name: 'Agachamento Hack', nameEn: 'Hack Squat', category: 'Quadríceps', equipment: 'Máquina', muscles: ['Quadríceps'] },
  { id: 'legs-4', name: 'Leg Press', nameEn: 'Leg Press', category: 'Quadríceps', equipment: 'Máquina', muscles: ['Quadríceps', 'Glúteos'] },
  { id: 'legs-5', name: 'Leg Press 45°', nameEn: 'Leg Press 45', category: 'Quadríceps', equipment: 'Máquina', muscles: ['Quadríceps', 'Glúteos'] },
  { id: 'legs-6', name: 'Cadeira Extensora', nameEn: 'Leg Extension', category: 'Quadríceps', equipment: 'Máquina', muscles: ['Quadríceps'] },
  { id: 'legs-7', name: 'Afundo', nameEn: 'Lunge', category: 'Quadríceps', equipment: 'Peso Corporal', muscles: ['Quadríceps', 'Glúteos'] },
  { id: 'legs-8', name: 'Afundo com Halteres', nameEn: 'Dumbbell Lunge', category: 'Quadríceps', equipment: 'Halteres', muscles: ['Quadríceps', 'Glúteos'] },
  { id: 'legs-9', name: 'Afundo Búlgaro', nameEn: 'Bulgarian Split Squat', category: 'Quadríceps', equipment: 'Peso Corporal', muscles: ['Quadríceps', 'Glúteos'] },
  { id: 'legs-10', name: 'Step Up', nameEn: 'Step Up', category: 'Quadríceps', equipment: 'Step', muscles: ['Quadríceps', 'Glúteos'] },
  { id: 'legs-11', name: 'Agachamento Sumô', nameEn: 'Sumo Squat', category: 'Quadríceps', equipment: 'Halter', muscles: ['Quadríceps', 'Adutores', 'Glúteos'] },
  { id: 'legs-12', name: 'Agachamento Goblet', nameEn: 'Goblet Squat', category: 'Quadríceps', equipment: 'Kettlebell', muscles: ['Quadríceps', 'Core'] },

  // PERNAS - Isquiotibiais
  { id: 'hamstring-1', name: 'Mesa Flexora', nameEn: 'Lying Leg Curl', category: 'Isquiotibiais', equipment: 'Máquina', muscles: ['Isquiotibiais'] },
  { id: 'hamstring-2', name: 'Cadeira Flexora', nameEn: 'Seated Leg Curl', category: 'Isquiotibiais', equipment: 'Máquina', muscles: ['Isquiotibiais'] },
  { id: 'hamstring-3', name: 'Stiff', nameEn: 'Stiff Leg Deadlift', category: 'Isquiotibiais', equipment: 'Barra', muscles: ['Isquiotibiais', 'Glúteos'] },
  { id: 'hamstring-4', name: 'Bom Dia', nameEn: 'Good Morning', category: 'Isquiotibiais', equipment: 'Barra', muscles: ['Isquiotibiais', 'Eretores'] },
  { id: 'hamstring-5', name: 'Nordic Curl', nameEn: 'Nordic Hamstring Curl', category: 'Isquiotibiais', equipment: 'Peso Corporal', muscles: ['Isquiotibiais'] },

  // GLÚTEOS
  { id: 'glutes-1', name: 'Hip Thrust', nameEn: 'Barbell Hip Thrust', category: 'Glúteos', equipment: 'Barra', muscles: ['Glúteos', 'Isquiotibiais'] },
  { id: 'glutes-2', name: 'Elevação Pélvica', nameEn: 'Glute Bridge', category: 'Glúteos', equipment: 'Peso Corporal', muscles: ['Glúteos'] },
  { id: 'glutes-3', name: 'Abdução de Quadril', nameEn: 'Hip Abduction', category: 'Glúteos', equipment: 'Máquina', muscles: ['Glúteo Médio'] },
  { id: 'glutes-4', name: 'Abdução na Polia', nameEn: 'Cable Hip Abduction', category: 'Glúteos', equipment: 'Polia', muscles: ['Glúteo Médio'] },
  { id: 'glutes-5', name: 'Coice na Polia', nameEn: 'Cable Kickback', category: 'Glúteos', equipment: 'Polia', muscles: ['Glúteos'] },
  { id: 'glutes-6', name: 'Agachamento na Máquina Smith', nameEn: 'Smith Machine Squat', category: 'Glúteos', equipment: 'Smith', muscles: ['Glúteos', 'Quadríceps'] },
  { id: 'glutes-7', name: 'Passada no Smith', nameEn: 'Smith Machine Lunge', category: 'Glúteos', equipment: 'Smith', muscles: ['Glúteos', 'Quadríceps'] },

  // PANTURRILHA
  { id: 'calf-1', name: 'Panturrilha em Pé', nameEn: 'Standing Calf Raise', category: 'Panturrilha', equipment: 'Máquina', muscles: ['Gastrocnêmio'] },
  { id: 'calf-2', name: 'Panturrilha Sentado', nameEn: 'Seated Calf Raise', category: 'Panturrilha', equipment: 'Máquina', muscles: ['Sóleo'] },
  { id: 'calf-3', name: 'Panturrilha no Leg Press', nameEn: 'Leg Press Calf Raise', category: 'Panturrilha', equipment: 'Máquina', muscles: ['Gastrocnêmio'] },
  { id: 'calf-4', name: 'Panturrilha Burro', nameEn: 'Donkey Calf Raise', category: 'Panturrilha', equipment: 'Máquina', muscles: ['Gastrocnêmio'] },

  // ABDOMINAIS
  { id: 'abs-1', name: 'Abdominal Crunch', nameEn: 'Crunch', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Reto Abdominal'] },
  { id: 'abs-2', name: 'Abdominal Infra', nameEn: 'Reverse Crunch', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Reto Abdominal Inferior'] },
  { id: 'abs-3', name: 'Abdominal na Polia', nameEn: 'Cable Crunch', category: 'Abdominais', equipment: 'Polia', muscles: ['Reto Abdominal'] },
  { id: 'abs-4', name: 'Prancha', nameEn: 'Plank', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Core', 'Transverso'] },
  { id: 'abs-5', name: 'Prancha Lateral', nameEn: 'Side Plank', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Oblíquos'] },
  { id: 'abs-6', name: 'Elevação de Pernas', nameEn: 'Hanging Leg Raise', category: 'Abdominais', equipment: 'Barra', muscles: ['Reto Abdominal', 'Flexores do Quadril'] },
  { id: 'abs-7', name: 'Abdominal Bicicleta', nameEn: 'Bicycle Crunch', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Oblíquos', 'Reto Abdominal'] },
  { id: 'abs-8', name: 'Russian Twist', nameEn: 'Russian Twist', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Oblíquos'] },
  { id: 'abs-9', name: 'Abdominal Canivete', nameEn: 'V-Up', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Reto Abdominal'] },
  { id: 'abs-10', name: 'Dead Bug', nameEn: 'Dead Bug', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Core', 'Transverso'] },
  { id: 'abs-11', name: 'Mountain Climber', nameEn: 'Mountain Climber', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Core', 'Flexores do Quadril'] },
  { id: 'abs-12', name: 'Roda Abdominal', nameEn: 'Ab Wheel Rollout', category: 'Abdominais', equipment: 'Roda', muscles: ['Core', 'Reto Abdominal'] },

  // CARDIO
  { id: 'cardio-1', name: 'Corrida na Esteira', nameEn: 'Treadmill Run', category: 'Cardio', equipment: 'Esteira', muscles: ['Cardiovascular'] },
  { id: 'cardio-2', name: 'Bicicleta Ergométrica', nameEn: 'Stationary Bike', category: 'Cardio', equipment: 'Bicicleta', muscles: ['Cardiovascular', 'Quadríceps'] },
  { id: 'cardio-3', name: 'Elíptico', nameEn: 'Elliptical', category: 'Cardio', equipment: 'Elíptico', muscles: ['Cardiovascular', 'Full Body'] },
  { id: 'cardio-4', name: 'Remo Ergométrico', nameEn: 'Rowing Machine', category: 'Cardio', equipment: 'Remo', muscles: ['Cardiovascular', 'Costas'] },
  { id: 'cardio-5', name: 'Pular Corda', nameEn: 'Jump Rope', category: 'Cardio', equipment: 'Corda', muscles: ['Cardiovascular', 'Panturrilha'] },
  { id: 'cardio-6', name: 'Burpee', nameEn: 'Burpee', category: 'Cardio', equipment: 'Peso Corporal', muscles: ['Full Body'] },
  { id: 'cardio-7', name: 'Jumping Jack', nameEn: 'Jumping Jack', category: 'Cardio', equipment: 'Peso Corporal', muscles: ['Cardiovascular'] },
  { id: 'cardio-8', name: 'Box Jump', nameEn: 'Box Jump', category: 'Cardio', equipment: 'Box', muscles: ['Quadríceps', 'Glúteos'] },

  // FUNCIONAIS
  { id: 'func-1', name: 'Kettlebell Swing', nameEn: 'Kettlebell Swing', category: 'Funcional', equipment: 'Kettlebell', muscles: ['Glúteos', 'Core', 'Isquiotibiais'] },
  { id: 'func-2', name: 'Clean and Press', nameEn: 'Clean and Press', category: 'Funcional', equipment: 'Barra', muscles: ['Full Body'] },
  { id: 'func-3', name: 'Snatch', nameEn: 'Snatch', category: 'Funcional', equipment: 'Barra', muscles: ['Full Body'] },
  { id: 'func-4', name: 'Turkish Get Up', nameEn: 'Turkish Get Up', category: 'Funcional', equipment: 'Kettlebell', muscles: ['Full Body', 'Core'] },
  { id: 'func-5', name: 'Thruster', nameEn: 'Thruster', category: 'Funcional', equipment: 'Barra', muscles: ['Quadríceps', 'Deltóides'] },
  { id: 'func-6', name: 'Wall Ball', nameEn: 'Wall Ball', category: 'Funcional', equipment: 'Medicine Ball', muscles: ['Quadríceps', 'Deltóides'] },
  { id: 'func-7', name: 'Battle Rope', nameEn: 'Battle Rope', category: 'Funcional', equipment: 'Corda', muscles: ['Ombros', 'Core', 'Cardiovascular'] },
  { id: 'func-8', name: 'Farmer Walk', nameEn: 'Farmer Walk', category: 'Funcional', equipment: 'Halteres', muscles: ['Trapézio', 'Core', 'Antebraço'] },

  // ANTEBRAÇO
  { id: 'forearm-1', name: 'Rosca de Punho', nameEn: 'Wrist Curl', category: 'Antebraço', equipment: 'Barra', muscles: ['Flexores do Antebraço'] },
  { id: 'forearm-2', name: 'Rosca de Punho Invertida', nameEn: 'Reverse Wrist Curl', category: 'Antebraço', equipment: 'Barra', muscles: ['Extensores do Antebraço'] },
  { id: 'forearm-3', name: 'Farmer Walk', nameEn: 'Farmer Walk', category: 'Antebraço', equipment: 'Halteres', muscles: ['Antebraço', 'Trapézio'] },
];

export const exerciseCategories = [
  'Peito',
  'Costas',
  'Ombros',
  'Bíceps',
  'Tríceps',
  'Quadríceps',
  'Isquiotibiais',
  'Glúteos',
  'Panturrilha',
  'Abdominais',
  'Cardio',
  'Funcional',
  'Antebraço',
];

export function searchExercises(query: string, category?: string): ExerciseData[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  return exerciseDatabase.filter(exercise => {
    const matchesCategory = !category || exercise.category === category;
    const matchesQuery = !normalizedQuery || 
      exercise.name.toLowerCase().includes(normalizedQuery) ||
      exercise.nameEn?.toLowerCase().includes(normalizedQuery) ||
      exercise.muscles.some(m => m.toLowerCase().includes(normalizedQuery)) ||
      exercise.equipment?.toLowerCase().includes(normalizedQuery);
    
    return matchesCategory && matchesQuery;
  });
}
