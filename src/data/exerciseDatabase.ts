// Exercise database compiled from various fitness sources
// GIFs from ExerciseDB API

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
  { id: 'chest-1', name: 'Supino Reto com Barra', nameEn: 'Barbell Bench Press', category: 'Peito', equipment: 'Barra', muscles: ['Peitoral Maior', 'Tríceps', 'Deltóide Anterior'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif' },
  { id: 'chest-2', name: 'Supino Inclinado com Barra', nameEn: 'Incline Barbell Bench Press', category: 'Peito', equipment: 'Barra', muscles: ['Peitoral Superior', 'Tríceps', 'Deltóide Anterior'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Barbell-Bench-Press.gif' },
  { id: 'chest-3', name: 'Supino Declinado com Barra', nameEn: 'Decline Barbell Bench Press', category: 'Peito', equipment: 'Barra', muscles: ['Peitoral Inferior', 'Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Decline-Barbell-Bench-Press.gif' },
  { id: 'chest-4', name: 'Supino Reto com Halteres', nameEn: 'Dumbbell Bench Press', category: 'Peito', equipment: 'Halteres', muscles: ['Peitoral Maior', 'Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif' },
  { id: 'chest-5', name: 'Supino Inclinado com Halteres', nameEn: 'Incline Dumbbell Press', category: 'Peito', equipment: 'Halteres', muscles: ['Peitoral Superior', 'Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif' },
  { id: 'chest-6', name: 'Crucifixo Reto', nameEn: 'Dumbbell Fly', category: 'Peito', equipment: 'Halteres', muscles: ['Peitoral Maior'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif' },
  { id: 'chest-7', name: 'Crucifixo Inclinado', nameEn: 'Incline Dumbbell Fly', category: 'Peito', equipment: 'Halteres', muscles: ['Peitoral Superior'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-dumbbell-Fly.gif' },
  { id: 'chest-8', name: 'Crossover na Polia', nameEn: 'Cable Crossover', category: 'Peito', equipment: 'Polia', muscles: ['Peitoral Maior'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif' },
  { id: 'chest-9', name: 'Peck Deck', nameEn: 'Pec Deck Machine', category: 'Peito', equipment: 'Máquina', muscles: ['Peitoral Maior'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif' },
  { id: 'chest-10', name: 'Flexão de Braço', nameEn: 'Push-Up', category: 'Peito', equipment: 'Peso Corporal', muscles: ['Peitoral Maior', 'Tríceps', 'Core'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif' },
  { id: 'chest-11', name: 'Flexão Diamante', nameEn: 'Diamond Push-Up', category: 'Peito', equipment: 'Peso Corporal', muscles: ['Peitoral Maior', 'Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Diamond-Push-up.gif' },
  { id: 'chest-12', name: 'Pullover com Halter', nameEn: 'Dumbbell Pullover', category: 'Peito', equipment: 'Halter', muscles: ['Peitoral Maior', 'Dorsal'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Pullover.gif' },

  // COSTAS (Back)
  { id: 'back-1', name: 'Barra Fixa', nameEn: 'Pull-Up', category: 'Costas', equipment: 'Peso Corporal', muscles: ['Dorsal', 'Bíceps', 'Rombóides'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif' },
  { id: 'back-2', name: 'Barra Fixa Supinada', nameEn: 'Chin-Up', category: 'Costas', equipment: 'Peso Corporal', muscles: ['Dorsal', 'Bíceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chin-Up.gif' },
  { id: 'back-3', name: 'Puxada Frontal', nameEn: 'Lat Pulldown', category: 'Costas', equipment: 'Polia', muscles: ['Dorsal', 'Bíceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif' },
  { id: 'back-4', name: 'Puxada Triângulo', nameEn: 'Close Grip Lat Pulldown', category: 'Costas', equipment: 'Polia', muscles: ['Dorsal', 'Bíceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Lat-Pulldown.gif' },
  { id: 'back-5', name: 'Remada Curvada com Barra', nameEn: 'Barbell Row', category: 'Costas', equipment: 'Barra', muscles: ['Dorsal', 'Rombóides', 'Bíceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif' },
  { id: 'back-6', name: 'Remada Curvada com Halter', nameEn: 'Dumbbell Row', category: 'Costas', equipment: 'Halter', muscles: ['Dorsal', 'Rombóides'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif' },
  { id: 'back-7', name: 'Remada Cavalinho', nameEn: 'T-Bar Row', category: 'Costas', equipment: 'Máquina', muscles: ['Dorsal', 'Rombóides'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/T-Bar-Row.gif' },
  { id: 'back-8', name: 'Remada Baixa', nameEn: 'Seated Cable Row', category: 'Costas', equipment: 'Polia', muscles: ['Dorsal', 'Rombóides'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif' },
  { id: 'back-9', name: 'Remada Unilateral na Polia', nameEn: 'Single Arm Cable Row', category: 'Costas', equipment: 'Polia', muscles: ['Dorsal'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/One-Arm-Cable-Row.gif' },
  { id: 'back-10', name: 'Levantamento Terra', nameEn: 'Deadlift', category: 'Costas', equipment: 'Barra', muscles: ['Eretores', 'Glúteos', 'Isquiotibiais'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif' },
  { id: 'back-11', name: 'Levantamento Terra Romeno', nameEn: 'Romanian Deadlift', category: 'Costas', equipment: 'Barra', muscles: ['Eretores', 'Isquiotibiais', 'Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Romanian-Deadlift.gif' },
  { id: 'back-12', name: 'Hiperextensão', nameEn: 'Back Extension', category: 'Costas', equipment: 'Banco', muscles: ['Eretores', 'Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/45-degree-hyperextension.gif' },
  { id: 'back-13', name: 'Encolhimento de Ombros', nameEn: 'Barbell Shrug', category: 'Costas', equipment: 'Barra', muscles: ['Trapézio'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Shrug.gif' },
  { id: 'back-14', name: 'Remada Alta', nameEn: 'Upright Row', category: 'Costas', equipment: 'Barra', muscles: ['Trapézio', 'Deltóides'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Upright-Row.gif' },

  // OMBROS (Shoulders)
  { id: 'shoulder-1', name: 'Desenvolvimento com Barra', nameEn: 'Overhead Press', category: 'Ombros', equipment: 'Barra', muscles: ['Deltóide Anterior', 'Deltóide Lateral', 'Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Shoulder-Press.gif' },
  { id: 'shoulder-2', name: 'Desenvolvimento com Halteres', nameEn: 'Dumbbell Shoulder Press', category: 'Ombros', equipment: 'Halteres', muscles: ['Deltóides', 'Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif' },
  { id: 'shoulder-3', name: 'Desenvolvimento Arnold', nameEn: 'Arnold Press', category: 'Ombros', equipment: 'Halteres', muscles: ['Deltóides'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif' },
  { id: 'shoulder-4', name: 'Elevação Lateral', nameEn: 'Lateral Raise', category: 'Ombros', equipment: 'Halteres', muscles: ['Deltóide Lateral'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif' },
  { id: 'shoulder-5', name: 'Elevação Frontal', nameEn: 'Front Raise', category: 'Ombros', equipment: 'Halteres', muscles: ['Deltóide Anterior'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Front-Raise.gif' },
  { id: 'shoulder-6', name: 'Crucifixo Inverso', nameEn: 'Reverse Fly', category: 'Ombros', equipment: 'Halteres', muscles: ['Deltóide Posterior', 'Rombóides'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Rear-Delt-Fly.gif' },
  { id: 'shoulder-7', name: 'Face Pull', nameEn: 'Face Pull', category: 'Ombros', equipment: 'Polia', muscles: ['Deltóide Posterior', 'Trapézio'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif' },
  { id: 'shoulder-8', name: 'Elevação Lateral na Polia', nameEn: 'Cable Lateral Raise', category: 'Ombros', equipment: 'Polia', muscles: ['Deltóide Lateral'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Lateral-Raise.gif' },
  { id: 'shoulder-9', name: 'Desenvolvimento na Máquina', nameEn: 'Machine Shoulder Press', category: 'Ombros', equipment: 'Máquina', muscles: ['Deltóides', 'Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Machine-Shoulder-Press.gif' },

  // BÍCEPS
  { id: 'biceps-1', name: 'Rosca Direta com Barra', nameEn: 'Barbell Curl', category: 'Bíceps', equipment: 'Barra', muscles: ['Bíceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif' },
  { id: 'biceps-2', name: 'Rosca Alternada com Halteres', nameEn: 'Alternating Dumbbell Curl', category: 'Bíceps', equipment: 'Halteres', muscles: ['Bíceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Alternate-Dumbbell-Curl.gif' },
  { id: 'biceps-3', name: 'Rosca Martelo', nameEn: 'Hammer Curl', category: 'Bíceps', equipment: 'Halteres', muscles: ['Bíceps', 'Braquial'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif' },
  { id: 'biceps-4', name: 'Rosca Concentrada', nameEn: 'Concentration Curl', category: 'Bíceps', equipment: 'Halter', muscles: ['Bíceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif' },
  { id: 'biceps-5', name: 'Rosca Scott', nameEn: 'Preacher Curl', category: 'Bíceps', equipment: 'Barra EZ', muscles: ['Bíceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Preacher-Curl.gif' },
  { id: 'biceps-6', name: 'Rosca na Polia', nameEn: 'Cable Curl', category: 'Bíceps', equipment: 'Polia', muscles: ['Bíceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Curl.gif' },
  { id: 'biceps-7', name: 'Rosca Inclinada', nameEn: 'Incline Dumbbell Curl', category: 'Bíceps', equipment: 'Halteres', muscles: ['Bíceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Curl.gif' },
  { id: 'biceps-8', name: 'Rosca Spider', nameEn: 'Spider Curl', category: 'Bíceps', equipment: 'Barra EZ', muscles: ['Bíceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Spider-Curl.gif' },
  { id: 'biceps-9', name: 'Rosca 21', nameEn: '21s Curl', category: 'Bíceps', equipment: 'Barra', muscles: ['Bíceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif' },

  // TRÍCEPS
  { id: 'triceps-1', name: 'Tríceps Pulley', nameEn: 'Tricep Pushdown', category: 'Tríceps', equipment: 'Polia', muscles: ['Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif' },
  { id: 'triceps-2', name: 'Tríceps Corda', nameEn: 'Rope Pushdown', category: 'Tríceps', equipment: 'Polia', muscles: ['Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Rope-Pushdown.gif' },
  { id: 'triceps-3', name: 'Tríceps Testa', nameEn: 'Skull Crusher', category: 'Tríceps', equipment: 'Barra EZ', muscles: ['Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Skull-Crusher.gif' },
  { id: 'triceps-4', name: 'Tríceps Francês', nameEn: 'Overhead Tricep Extension', category: 'Tríceps', equipment: 'Halter', muscles: ['Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Triceps-Extension.gif' },
  { id: 'triceps-5', name: 'Tríceps Coice', nameEn: 'Tricep Kickback', category: 'Tríceps', equipment: 'Halter', muscles: ['Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Kickback.gif' },
  { id: 'triceps-6', name: 'Mergulho em Barras Paralelas', nameEn: 'Dips', category: 'Tríceps', equipment: 'Peso Corporal', muscles: ['Tríceps', 'Peitoral'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif' },
  { id: 'triceps-7', name: 'Mergulho no Banco', nameEn: 'Bench Dips', category: 'Tríceps', equipment: 'Banco', muscles: ['Tríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bench-Dips.gif' },
  { id: 'triceps-8', name: 'Supino Fechado', nameEn: 'Close Grip Bench Press', category: 'Tríceps', equipment: 'Barra', muscles: ['Tríceps', 'Peitoral'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif' },

  // PERNAS - Quadríceps
  { id: 'legs-1', name: 'Agachamento Livre', nameEn: 'Barbell Squat', category: 'Quadríceps', equipment: 'Barra', muscles: ['Quadríceps', 'Glúteos', 'Core'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Squat.gif' },
  { id: 'legs-2', name: 'Agachamento Frontal', nameEn: 'Front Squat', category: 'Quadríceps', equipment: 'Barra', muscles: ['Quadríceps', 'Core'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Front-Squat.gif' },
  { id: 'legs-3', name: 'Agachamento Hack', nameEn: 'Hack Squat', category: 'Quadríceps', equipment: 'Máquina', muscles: ['Quadríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hack-Squat.gif' },
  { id: 'legs-4', name: 'Leg Press', nameEn: 'Leg Press', category: 'Quadríceps', equipment: 'Máquina', muscles: ['Quadríceps', 'Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif' },
  { id: 'legs-5', name: 'Leg Press 45°', nameEn: 'Leg Press 45', category: 'Quadríceps', equipment: 'Máquina', muscles: ['Quadríceps', 'Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif' },
  { id: 'legs-6', name: 'Cadeira Extensora', nameEn: 'Leg Extension', category: 'Quadríceps', equipment: 'Máquina', muscles: ['Quadríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif' },
  { id: 'legs-7', name: 'Afundo', nameEn: 'Lunge', category: 'Quadríceps', equipment: 'Peso Corporal', muscles: ['Quadríceps', 'Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunges.gif' },
  { id: 'legs-8', name: 'Afundo com Halteres', nameEn: 'Dumbbell Lunge', category: 'Quadríceps', equipment: 'Halteres', muscles: ['Quadríceps', 'Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunges.gif' },
  { id: 'legs-9', name: 'Afundo Búlgaro', nameEn: 'Bulgarian Split Squat', category: 'Quadríceps', equipment: 'Peso Corporal', muscles: ['Quadríceps', 'Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bulgarian-Split-Squat.gif' },
  { id: 'legs-10', name: 'Step Up', nameEn: 'Step Up', category: 'Quadríceps', equipment: 'Step', muscles: ['Quadríceps', 'Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Step-Up.gif' },
  { id: 'legs-11', name: 'Agachamento Sumô', nameEn: 'Sumo Squat', category: 'Quadríceps', equipment: 'Halter', muscles: ['Quadríceps', 'Adutores', 'Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Sumo-Squat.gif' },
  { id: 'legs-12', name: 'Agachamento Goblet', nameEn: 'Goblet Squat', category: 'Quadríceps', equipment: 'Kettlebell', muscles: ['Quadríceps', 'Core'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Goblet-Squat.gif' },

  // PERNAS - Isquiotibiais
  { id: 'hamstring-1', name: 'Mesa Flexora', nameEn: 'Lying Leg Curl', category: 'Isquiotibiais', equipment: 'Máquina', muscles: ['Isquiotibiais'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Curl.gif' },
  { id: 'hamstring-2', name: 'Cadeira Flexora', nameEn: 'Seated Leg Curl', category: 'Isquiotibiais', equipment: 'Máquina', muscles: ['Isquiotibiais'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Leg-Curl.gif' },
  { id: 'hamstring-3', name: 'Stiff', nameEn: 'Stiff Leg Deadlift', category: 'Isquiotibiais', equipment: 'Barra', muscles: ['Isquiotibiais', 'Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Stiff-Leg-Deadlift.gif' },
  { id: 'hamstring-4', name: 'Bom Dia', nameEn: 'Good Morning', category: 'Isquiotibiais', equipment: 'Barra', muscles: ['Isquiotibiais', 'Eretores'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Good-Morning.gif' },
  { id: 'hamstring-5', name: 'Nordic Curl', nameEn: 'Nordic Hamstring Curl', category: 'Isquiotibiais', equipment: 'Peso Corporal', muscles: ['Isquiotibiais'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Nordic-Hamstring-Curl.gif' },

  // GLÚTEOS
  { id: 'glutes-1', name: 'Hip Thrust', nameEn: 'Barbell Hip Thrust', category: 'Glúteos', equipment: 'Barra', muscles: ['Glúteos', 'Isquiotibiais'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif' },
  { id: 'glutes-2', name: 'Elevação Pélvica', nameEn: 'Glute Bridge', category: 'Glúteos', equipment: 'Peso Corporal', muscles: ['Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Glute-Bridge.gif' },
  { id: 'glutes-3', name: 'Abdução de Quadril', nameEn: 'Hip Abduction', category: 'Glúteos', equipment: 'Máquina', muscles: ['Glúteo Médio'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hip-Abduction-Machine.gif' },
  { id: 'glutes-4', name: 'Abdução na Polia', nameEn: 'Cable Hip Abduction', category: 'Glúteos', equipment: 'Polia', muscles: ['Glúteo Médio'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Hip-Abduction.gif' },
  { id: 'glutes-5', name: 'Coice na Polia', nameEn: 'Cable Kickback', category: 'Glúteos', equipment: 'Polia', muscles: ['Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Glute-Kickback.gif' },
  { id: 'glutes-6', name: 'Agachamento na Máquina Smith', nameEn: 'Smith Machine Squat', category: 'Glúteos', equipment: 'Smith', muscles: ['Glúteos', 'Quadríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Smith-Machine-Squat.gif' },
  { id: 'glutes-7', name: 'Passada no Smith', nameEn: 'Smith Machine Lunge', category: 'Glúteos', equipment: 'Smith', muscles: ['Glúteos', 'Quadríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Smith-Machine-Lunge.gif' },

  // PANTURRILHA
  { id: 'calf-1', name: 'Panturrilha em Pé', nameEn: 'Standing Calf Raise', category: 'Panturrilha', equipment: 'Máquina', muscles: ['Gastrocnêmio'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif' },
  { id: 'calf-2', name: 'Panturrilha Sentado', nameEn: 'Seated Calf Raise', category: 'Panturrilha', equipment: 'Máquina', muscles: ['Sóleo'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif' },
  { id: 'calf-3', name: 'Panturrilha no Leg Press', nameEn: 'Leg Press Calf Raise', category: 'Panturrilha', equipment: 'Máquina', muscles: ['Gastrocnêmio'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Calf-Press-on-Leg-Press.gif' },
  { id: 'calf-4', name: 'Panturrilha Burro', nameEn: 'Donkey Calf Raise', category: 'Panturrilha', equipment: 'Máquina', muscles: ['Gastrocnêmio'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Donkey-Calf-Raise.gif' },

  // ABDOMINAIS
  { id: 'abs-1', name: 'Abdominal Crunch', nameEn: 'Crunch', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Reto Abdominal'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Crunch.gif' },
  { id: 'abs-2', name: 'Abdominal Infra', nameEn: 'Reverse Crunch', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Reto Abdominal Inferior'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Crunch.gif' },
  { id: 'abs-3', name: 'Abdominal na Polia', nameEn: 'Cable Crunch', category: 'Abdominais', equipment: 'Polia', muscles: ['Reto Abdominal'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crunch.gif' },
  { id: 'abs-4', name: 'Prancha', nameEn: 'Plank', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Core', 'Transverso'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Front-Plank.gif' },
  { id: 'abs-5', name: 'Prancha Lateral', nameEn: 'Side Plank', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Oblíquos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Side-Plank.gif' },
  { id: 'abs-6', name: 'Elevação de Pernas', nameEn: 'Hanging Leg Raise', category: 'Abdominais', equipment: 'Barra', muscles: ['Reto Abdominal', 'Flexores do Quadril'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hanging-Leg-Raise.gif' },
  { id: 'abs-7', name: 'Abdominal Bicicleta', nameEn: 'Bicycle Crunch', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Oblíquos', 'Reto Abdominal'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif' },
  { id: 'abs-8', name: 'Russian Twist', nameEn: 'Russian Twist', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Oblíquos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif' },
  { id: 'abs-9', name: 'Abdominal Canivete', nameEn: 'V-Up', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Reto Abdominal'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/V-Up.gif' },
  { id: 'abs-10', name: 'Dead Bug', nameEn: 'Dead Bug', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Core', 'Transverso'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif' },
  { id: 'abs-11', name: 'Mountain Climber', nameEn: 'Mountain Climber', category: 'Abdominais', equipment: 'Peso Corporal', muscles: ['Core', 'Flexores do Quadril'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-Climber.gif' },
  { id: 'abs-12', name: 'Roda Abdominal', nameEn: 'Ab Wheel Rollout', category: 'Abdominais', equipment: 'Roda', muscles: ['Core', 'Reto Abdominal'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Ab-Wheel-Rollout.gif' },

  // CARDIO
  { id: 'cardio-1', name: 'Corrida na Esteira', nameEn: 'Treadmill Run', category: 'Cardio', equipment: 'Esteira', muscles: ['Cardiovascular'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Treadmill-Running.gif' },
  { id: 'cardio-2', name: 'Bicicleta Ergométrica', nameEn: 'Stationary Bike', category: 'Cardio', equipment: 'Bicicleta', muscles: ['Cardiovascular', 'Quadríceps'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Stationary-Bike.gif' },
  { id: 'cardio-3', name: 'Elíptico', nameEn: 'Elliptical', category: 'Cardio', equipment: 'Elíptico', muscles: ['Cardiovascular', 'Full Body'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Elliptical-Machine.gif' },
  { id: 'cardio-4', name: 'Remo Ergométrico', nameEn: 'Rowing Machine', category: 'Cardio', equipment: 'Remo', muscles: ['Cardiovascular', 'Costas'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Rowing-Machine.gif' },
  { id: 'cardio-5', name: 'Pular Corda', nameEn: 'Jump Rope', category: 'Cardio', equipment: 'Corda', muscles: ['Cardiovascular', 'Panturrilha'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Jump-Rope.gif' },
  { id: 'cardio-6', name: 'Burpee', nameEn: 'Burpee', category: 'Cardio', equipment: 'Peso Corporal', muscles: ['Full Body'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Burpee.gif' },
  { id: 'cardio-7', name: 'Jumping Jack', nameEn: 'Jumping Jack', category: 'Cardio', equipment: 'Peso Corporal', muscles: ['Cardiovascular'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Jumping-Jack.gif' },
  { id: 'cardio-8', name: 'Box Jump', nameEn: 'Box Jump', category: 'Cardio', equipment: 'Box', muscles: ['Quadríceps', 'Glúteos'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Box-Jump.gif' },

  // FUNCIONAIS
  { id: 'func-1', name: 'Kettlebell Swing', nameEn: 'Kettlebell Swing', category: 'Funcional', equipment: 'Kettlebell', muscles: ['Glúteos', 'Core', 'Isquiotibiais'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Kettlebell-Swing.gif' },
  { id: 'func-2', name: 'Clean and Press', nameEn: 'Clean and Press', category: 'Funcional', equipment: 'Barra', muscles: ['Full Body'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Clean-and-Press.gif' },
  { id: 'func-3', name: 'Snatch', nameEn: 'Snatch', category: 'Funcional', equipment: 'Barra', muscles: ['Full Body'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Snatch.gif' },
  { id: 'func-4', name: 'Turkish Get Up', nameEn: 'Turkish Get Up', category: 'Funcional', equipment: 'Kettlebell', muscles: ['Full Body', 'Core'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Turkish-Get-Up.gif' },
  { id: 'func-5', name: 'Thruster', nameEn: 'Thruster', category: 'Funcional', equipment: 'Barra', muscles: ['Quadríceps', 'Deltóides'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Thruster.gif' },
  { id: 'func-6', name: 'Wall Ball', nameEn: 'Wall Ball', category: 'Funcional', equipment: 'Medicine Ball', muscles: ['Quadríceps', 'Deltóides'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Wall-Ball.gif' },
  { id: 'func-7', name: 'Battle Rope', nameEn: 'Battle Rope', category: 'Funcional', equipment: 'Corda', muscles: ['Ombros', 'Core', 'Cardiovascular'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Battling-Ropes.gif' },
  { id: 'func-8', name: 'Farmer Walk', nameEn: 'Farmer Walk', category: 'Funcional', equipment: 'Halteres', muscles: ['Trapézio', 'Core', 'Antebraço'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Farmers-Walk.gif' },

  // ANTEBRAÇO
  { id: 'forearm-1', name: 'Rosca de Punho', nameEn: 'Wrist Curl', category: 'Antebraço', equipment: 'Barra', muscles: ['Flexores do Antebraço'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Wrist-Curl.gif' },
  { id: 'forearm-2', name: 'Rosca de Punho Invertida', nameEn: 'Reverse Wrist Curl', category: 'Antebraço', equipment: 'Barra', muscles: ['Extensores do Antebraço'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Wrist-Roller.gif' },
  { id: 'forearm-3', name: 'Farmer Walk', nameEn: 'Farmer Walk', category: 'Antebraço', equipment: 'Halteres', muscles: ['Antebraço', 'Trapézio'], imageUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Farmers-Walk.gif' },
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
