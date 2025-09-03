import { useState, useCallback } from 'react';
import { useApiKey } from './useApi';

type GenerateOptions = {
  model?: string;
  systemInstruction?: string;
};

export const useGemini = () => {
  const { apiKey } = useApiKey();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateText = useCallback(
    async (prompt: string, options?: GenerateOptions): Promise<string> => {
      if (!apiKey) {
        throw new Error('Missing Gemini API key. Set it in Settings.');
      }

      setLoading(true);
      setError(null);
      try {
        const model = options?.model ?? 'gemini-1.5-flash';
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

        const payload: any = {
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }],
            },
          ],
        };

        if (options?.systemInstruction) {
          payload['system_instruction'] = { role: 'system', parts: [{ text: options.systemInstruction }] };
        }

        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const body = await res.text();
          throw new Error(`Gemini error ${res.status}: ${body}`);
        }

        const data = await res.json();
        const text = data?.candidates?.[0]?.content?.parts?.map((p: any) => p?.text).join('') ?? '';
        return text;
      } finally {
        setLoading(false);
      }
    },
    [apiKey]
  );

  return { generateText, loading, error };
};

export default useGemini;


