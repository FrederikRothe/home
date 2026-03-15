import React, { useState, useMemo } from 'react';
import type { Coffee } from '../types/coffee';

interface Props {
  initialCoffees: Coffee[];
}

type SortKey = 'dateTried' | 'rating';
type SortOrder = 'asc' | 'desc';

export default function CoffeeTable({ initialCoffees }: Props) {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('dateTried');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  const filteredAndSortedCoffees = useMemo(() => {
    return initialCoffees
      .filter((coffee) => {
        const searchLower = search.toLowerCase();
        return (
          coffee.name.toLowerCase().includes(searchLower) ||
          coffee.roaster.toLowerCase().includes(searchLower) ||
          coffee.origin.toLowerCase().includes(searchLower) ||
          coffee.tastingNotes.some((note) => note.toLowerCase().includes(searchLower))
        );
      })
      .sort((a, b) => {
        let comparison = 0;
        if (sortKey === 'dateTried') {
          comparison = new Date(a.dateTried).getTime() - new Date(b.dateTried).getTime();
        } else if (sortKey === 'rating') {
          comparison = a.rating - b.rating;
        }
        return sortOrder === 'asc' ? comparison : -comparison;
      });
  }, [initialCoffees, search, sortKey, sortOrder]);

  const formatDate = (date: Date | string) => {
    try {
      const d = typeof date === 'string' ? new Date(date) : date;
      const monthDay = d.toLocaleDateString('en-us', {
        month: 'short',
        day: 'numeric',
      });
      const year = d.getFullYear();
      return (
        <span className="leading-tight block">
          {monthDay},<br />
          <span className="text-xs opacity-70">{year}</span>
        </span>
      );
    } catch (e) {
      return 'N/A';
    }
  };

  const SortIcon = ({ column }: { column: SortKey }) => {
    const isActive = sortKey === column;
    return (
      <span className={`ml-1.5 inline-flex flex-col -vertical-align-middle leading-none shrink-0 ${isActive ? 'text-[rgb(var(--accent))]' : 'text-[rgb(var(--gray))] opacity-30'}`}>
        <span className={`text-[8px] ${isActive && sortOrder === 'asc' ? 'opacity-100' : 'opacity-50'}`}>▲</span>
        <span className={`text-[8px] ${isActive && sortOrder === 'desc' ? 'opacity-100' : 'opacity-50'}`}>▼</span>
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name, roaster, origin or notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 bg-[rgb(var(--gray-light))] border border-[rgba(var(--gray),10%)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] transition-all text-[rgb(var(--black))]"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[rgb(var(--gray))]">
          {filteredAndSortedCoffees.length} / {initialCoffees.length}
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 md:mx-0">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-[rgba(var(--gray),20%)]">
              <th className="py-4 px-2 font-bold text-[rgb(var(--gray-dark))] w-12 text-xs uppercase tracking-wider"></th>
              <th className="py-4 px-2 font-bold text-[rgb(var(--gray-dark))] text-xs uppercase tracking-wider">
                Name
              </th>
              <th className="py-4 px-2 font-bold text-[rgb(var(--gray-dark))] text-xs uppercase tracking-wider">
                Roaster
              </th>
              <th className="py-4 px-2 font-bold text-[rgb(var(--gray-dark))] text-xs uppercase tracking-wider hidden md:table-cell">Origin</th>
              <th className="py-4 px-2 font-bold text-[rgb(var(--gray-dark))] hidden lg:table-cell text-xs uppercase tracking-wider">Notes</th>
              <th 
                className="py-4 px-2 font-bold text-[rgb(var(--gray-dark))] cursor-pointer hover:text-[rgb(var(--black))] text-xs uppercase tracking-wider group"
                onClick={() => handleSort('rating')}
              >
                <div className="flex items-center">
                  Score <SortIcon column="rating" />
                </div>
              </th>
              <th 
                className="py-4 px-2 font-bold text-[rgb(var(--gray-dark))] cursor-pointer hover:text-[rgb(var(--black))] text-xs uppercase tracking-wider group"
                onClick={() => handleSort('dateTried')}
              >
                <div className="flex items-center">
                  Date <SortIcon column="dateTried" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedCoffees.map((coffee) => (
              <tr key={coffee.id} className="border-b border-[rgba(var(--gray),10%)] hover:bg-[rgba(var(--gray-light),50%)] transition-colors">
                <td className="py-4 px-2">
                  {coffee.imageUrl ? (
                    <div className="w-10 h-10 bg-white rounded-lg overflow-hidden border border-[rgba(var(--gray),10%)]">
                      <img 
                        src={coffee.imageUrl} 
                        alt=""
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-[rgba(var(--gray),10%)] rounded-lg flex items-center justify-center text-[10px] text-[rgb(var(--gray))]">
                      N/A
                    </div>
                  )}
                </td>
                <td className="py-4 px-2 font-medium text-[rgb(var(--black))] text-sm leading-tight">{coffee.name}</td>
                <td className="py-4 px-2 text-[rgb(var(--gray-dark))] text-sm leading-tight">{coffee.roaster}</td>
                <td className="py-4 px-2 text-[rgb(var(--gray-dark))] text-sm leading-tight hidden md:table-cell">{coffee.origin}</td>
                <td className="py-4 px-2 hidden lg:table-cell text-xs text-[rgb(var(--gray))]">{coffee.tastingNotes.join(', ')}</td>
                <td className="py-4 px-2 font-black text-[rgb(var(--black))] text-base">{coffee.rating}</td>
                <td className="py-4 px-2 text-[rgb(var(--gray-dark))] text-xs">
                  {formatDate(coffee.dateTried)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredAndSortedCoffees.length === 0 && (
          <div className="py-12 text-center text-[rgb(var(--gray))] italic">
            No coffees found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
