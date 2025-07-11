import { CardContainer, CardBody, CardItem } from "./3d-card";

interface EducationCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
}

export function EducationCard({
  title,
  description,
  date,
  location,
}: EducationCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        
        <CardItem
          translateZ="100"
          className="w-full mt-4"
        >
          <div className="flex justify-between items-center text-xs text-neutral-500 dark:text-neutral-400">
            <span className="font-medium">{date}</span>
            <span>{location}</span>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}