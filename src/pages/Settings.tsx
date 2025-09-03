import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useApiKey } from '@/hooks/useApi';
import Navigation from '@/components/ui/navigation';

const Settings = () => {
  const { apiKey, loading, setKey, clearKey } = useApiKey();
  const [value, setValue] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (apiKey) setValue(apiKey);
  }, [apiKey]);

  const handleSave = async () => {
    await setKey(value.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const handleClear = async () => {
    await clearKey();
    setValue('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Configure your Gemini API access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="apiKey">Gemini API Key</Label>
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="AIza..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  disabled={loading}
                />
                <p className="text-sm text-muted-foreground">
                  Your key is stored locally in your browser (IndexedDB). It never leaves your device.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button onClick={handleSave} disabled={loading || !value.trim()}>
                {saved ? 'Saved' : 'Save Key'}
              </Button>
              <Button variant="secondary" onClick={handleClear} disabled={loading || !apiKey}>
                Remove Key
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;


