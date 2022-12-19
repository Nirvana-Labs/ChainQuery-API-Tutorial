import Link from 'next/link';
import { useContractStatistics } from "@nirvanalabs/chain-query-sdk";


export default function RestApi() {
  const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
  const apiKey = 'your-api-key-here'; // This API key is needed for paid version
  const request = {
    address: address,
    apiKey: apiKey
  }

  const { data , error, loading } = useContractStatistics(request);

  if (loading) return(<div>Loading...</div>);

  if (error) return(<div>Error occured ${error.message}</div>);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-3xl font-bold underline">Rest Api</h1>
      <table className="table-fixed border-separate border-spacing-2 border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600">Id</th>
            <th className="border border-slate-600">Address</th>
            <th className="border border-slate-600">Name</th>
            <th className="border border-slate-600">Symbol</th>
            <th className="border border-slate-600">Type</th>
            <th className="border border-slate-600">Total Supply</th>
            <th className="border border-slate-600">Current Block Number</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((d, index) => {
              return(
                <tr key={index}r>
                  <td className="border border-slate-600">{d.id}</td>
                  <td className="border border-slate-600">{d.address}</td>
                  <td className="border border-slate-600">{d.name}</td>
                  <td className="border border-slate-600">{d.symbol}</td>
                  <td className="border border-slate-600">{d.type}</td>
                  <td className="border border-slate-600">{d.total_supply}</td>
                  <td className="border border-slate-600">{d.current_block_number}</td>
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
