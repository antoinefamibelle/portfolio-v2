export interface Education {
  title: string;
  description: string;
  date: string;
  location: string;
}

export const educationData: Education[] = [
  {
    title: "Master of expert of informatic system",
    description: "Studied computer science and software engineering at Epitech Paris for 5 years.",
    date: "2018 - 2023",
    location: "Paris, France",
  },
  {
    title: "Certificate of Advanced English Program",
    description: "Studied English at California State University, Long Beach for 1 year. To improve and certify my English skills.",
    date: "2021-2022",
    location: "Long Beach, California",
  },
  {
    title: "Tepitech 880 (TOEIC)",
    description: "Certified with a score of 880/990 on the TOEIC exam. This certification is a proof of my English proficiency.",
    date: "2018-2023",
    location: "Paris, France",
  },
  {
    title: "Baccalaureat Scientifique Option Informatique",
    description: "French high school diploma in science with a specialization in computer science.",
    date: "2018",
    location: "Paris, France",
  },
];