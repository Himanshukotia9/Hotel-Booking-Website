import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const ScrollCarousel = () => {
  return (
    <div className="bg-landscape6 bg-opacity-20 bg-cover bg-center">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", window.matchMedia("(max-width: 768px)").matches ? "-85%" : "-45%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="group relative w-60 h-96 md:w-72 overflow-hidden bg-neutral-200">
      <div className={`absolute ${card.url} bg-cover bg-center inset-0 z-0 transition-transform duration-300 group-hover:scale-110`}></div>
    </div>
  );
};

export default ScrollCarousel;

const cards = [
  {
    url: "bg-carousel1",
    id: 1,
  },
  {
    url: "bg-carousel2",
    id: 2,
  },
  {
    url: "bg-carousel3",
    id: 3,
  },
  {
    url: "bg-carousel4",
    id: 4,
  },
  {
    url: "bg-carousel5",
    id: 5,
  },
  {
    url: "bg-carousel6",
    id: 6,
  },
];