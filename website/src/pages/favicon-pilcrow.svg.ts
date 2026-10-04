import pilcrow from '../assets/icons/pilcrow.svg?raw';

export function GET() {
  return new Response(pilcrow.replace('stroke="currentColor"', 'stroke="#24272d" style="background:#ffde00;border-radius:4px"'), {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
}
