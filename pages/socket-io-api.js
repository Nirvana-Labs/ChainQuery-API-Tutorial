import Link from 'next/link';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export default function SocketIoApi() {
  const [data, setData] = useState(null);

  const socket = io(`ws://132.145.152.27:8083`);
  // const socket = io(`http://localhost:8081`);

  function emitAndListen() {
    socket.emit("get:txns-latest", { limit: 10 }, (rows) => {
      setData(rows);
    });
  }

  useEffect(() => {
    emitAndListen();
    const interval = setInterval(emitAndListen, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return(<div>Loading...</div>);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-3xl font-bold underline">Socket.io Api</h1>
      <h1 className="text-3xl font-bold underline">Latest 10 transactions</h1>
      <table className="table-fixed border-separate border-spacing-2 border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600">Address</th>
            <th className="border border-slate-600">Value</th>

            <th className="border border-slate-600">From</th>
            <th className="border border-slate-600">To</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((d, index) => {
              return(
                <tr key={index}r>
                  <td className="border border-slate-600">{d.address}</td>
                  <td className="border border-slate-600">{d.name}</td>
                  <td className="border border-slate-600">{d.from}</td>
                  <td className="border border-slate-600">{d.to}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </div>
  );
}
