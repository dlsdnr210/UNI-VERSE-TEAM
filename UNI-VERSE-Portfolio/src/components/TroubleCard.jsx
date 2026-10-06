import React from 'react';
import { AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';

export default function TroubleCard({ item }) {
  return (
    <div className="bg-dark-card border border-gray-800 rounded-xl p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-light flex items-start gap-2">
          <AlertCircle className="text-red-400 shrink-0 mt-1" size={20} />
          <span>{item.problem}</span>
        </h3>
      </div>
      <div className="space-y-4 text-sm">
        <div>
          <span className="text-gray-500 block mb-1">원인</span>
          <p className="text-sub bg-gray-900/50 p-3 rounded-lg">{item.cause}</p>
        </div>
        <div>
          <span className="text-gray-500 block mb-1 flex items-center gap-1">
            <CheckCircle size={14} className="text-green-400" /> 해결
          </span>
          <p className="text-light bg-primary/10 border border-primary/20 p-3 rounded-lg">{item.solution}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-gray-500 block mb-1">결과</span>
            <p className="text-sub">{item.result}</p>
          </div>
          <div>
            <span className="text-gray-500 block mb-1 flex items-center gap-1">
              <Lightbulb size={14} className="text-yellow-400" /> 배운 점
            </span>
            <p className="text-sub">{item.lesson}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
