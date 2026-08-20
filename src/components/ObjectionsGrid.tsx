"use client";

import { useState } from "react";

type Objection = {
  id: string;
  question: string;
  videoId: string;
};

export function ObjectionsGrid({ objections }: { objections: Objection[] }) {
  const [playing, setPlaying] = useState<Set<string>>(new Set());

  const handlePlay = (id: string) => {
    setPlaying((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  return (
    <div className="obj-grid">
      {objections.map((o) => (
        <article key={o.id} className="obj-card">
          <div className="obj-card__video">
            {playing.has(o.id) ? (
              <iframe
                src={`https://www.youtube.com/embed/${o.videoId}?autoplay=1`}
                title={o.question}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="obj-card__thumb"
                onClick={() => handlePlay(o.id)}
                style={{
                  backgroundImage: `url(https://i.ytimg.com/vi/${o.videoId}/hqdefault.jpg)`,
                }}
                aria-label={`Regarder la réponse: ${o.question}`}
              >
                <span className="obj-card__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
          <h3 className="obj-card__question">{o.question}</h3>
        </article>
      ))}
    </div>
  );
}
