import React, { useState, useRef } from 'react';
import './Story.css';
import Paragraphs from './TypeAnimation';

const Story = () => {
  const [isStarted, setIsStarted] = useState(false);
  const typedRef = useRef(null);

  const toggleAnimation = () => {
    setIsStarted(prevState => !prevState);
    if (typedRef.current) {
      if (isStarted) {
        typedRef.current.toggle();
      } else {
        typedRef.current.toggle();
      }
    }
  };

  const maintext = [
    "In the heart of a distant kingdom, nestled amid emerald valleys and majestic mountains,", "there lived a wise and revered king maker named Eamon.", "He was a man of unwavering commitment,", "driven by an insatiable passion for his land and his people.",
    "Eamon's story began in his youth,", "as a humble commoner with a remarkable gift for understanding the needs and desires of his fellow villagers.", "His boundless compassion and innate ability to see the potential in others", "drew the attention of the ruling monarch, King Alaric.", "Recognizing Eamon's talents, the king appointed him as his chief advisor,", "entrusting him with the responsibility of shaping the kingdom's destiny.",
    "With the weight of this newfound duty upon his shoulders,", "Eamon dedicated himself wholeheartedly to the kingdom's prosperity.", "Days melted into nights as he toiled tirelessly,", "crafting policies that brought about economic growth, social harmony,", "and an environment of learning and progress.", "His wisdom and kindness endeared him to all,", "from the lowest peasant to the highest noble.",
    "Amidst his tireless efforts, Eamon's path crossed with a young woman named Seraphina.", "She possessed a rare beauty that was matched only by her radiant spirit.", "Seraphina's heart brimmed with a passion for healing,", "and she worked tirelessly as a healer,", "offering solace and comfort to those in need.",
    "As Eamon and Seraphina's paths intertwined,", "a profound connection blossomed.", "Their shared dedication to the well-being of the kingdom drew them closer,", "and before long, their hearts beat as one.", "But as love blossomed, a shadow of sadness loomed.", "Seraphina suffered from an incurable ailment,", "a secret she had kept hidden,", "fearing it would diminish Eamon's commitment to his duties.",
    "Despite her condition, their love only grew stronger.", "Eamon's every waking moment became a dedication to not only his kingdom", "but also to Seraphina's happiness.", "He sought the best physicians, traveled to distant lands for cures,", "and never left her side.", "The kingdom observed their love, and Eamon's commitment", "to both his responsibilities and Seraphina inspired all who witnessed it.",
    "However, fate can be unforgiving.", "As the years passed, Seraphina's condition worsened.", "Eamon's sleepless nights by her bedside took a toll on his health,", "yet he remained resolute.", "His determination to see her smile, even through her pain,", "painted a portrait of undying devotion.",
    "As Seraphina's final moments drew near,", "Eamon held her fragile hand,", "his eyes filled with tears of love and sorrow.", "With her last breath,", "she whispered words of gratitude and told him to continue his work,", "to keep the flame of compassion alive in the kingdom they both cherished.",
    "After Seraphina's passing,", "Eamon's heart was a mosaic of memories.", "He continued his work, but the weight of his loss was palpable.", "The kingdom saw not only a king maker but a man who had learned to love,", "to cherish, and to sacrifice.", "Eamon's legacy was not just one of political prowess", "but of human compassion", "that touched every corner of the realm.",
    "The story of Eamon, the king maker,", "echoed in the hearts of generations to come.", "His unwavering commitment to the kingdom,", "his passion for the welfare of his people,", "and his deep, selfless love for Seraphina", "became a legend that transcended time.", "The people whispered of a love that was as enduring as the mountains", "and as tender as a gentle breeze,", "reminding them that even in the face of heartache,", "the power of love and dedication could create", "a legacy that would never fade.",
  ];

  return (
    <div className='block'>
      <div className="container">
        {isStarted && (
          <Paragraphs
            ref={typedRef}
            text={maintext}
            typeSpeed={30}
            isPlaying={isStarted}
          />
        )}
      </div>
      <div className="button">
        <button onClick={toggleAnimation} className='click'>
          {isStarted ? 'Stop' : 'Start'}
        </button>
        <button onClick={() => typedRef.current.toggle()} className='click'>toggle</button>
        <button onClick={() => typedRef.current.reset()} className='click'>Restart</button>
      </div>
      
    </div>
  );
};

export default Story;
