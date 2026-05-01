import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-bold tracking-tighter mb-6 block">
            2025<span className="text-brand">company</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            신뢰와 기술을 바탕으로 기업의 성장을 연결하는 최적의 비즈니스 파트너입니다.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 underline decoration-brand decoration-2 underline-offset-4">Explore</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><Link to="/about" className="hover:text-brand transition-colors">회사 소개</Link></li>
            <li><Link to="/business" className="hover:text-brand transition-colors">사업 영역</Link></li>
            <li><Link to="/partners" className="hover:text-brand transition-colors">연계 기업</Link></li>
            <li><Link to="/esg" className="hover:text-brand transition-colors">ESG 경영</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 underline decoration-brand decoration-2 underline-offset-4">Contact Info</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand" />
              <span>contact@2025company.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand" />
              <span>02-1234-5678</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-brand" />
              <span>서울특별시 강남구 테헤란로 2025</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-6">
          <h4 className="text-white font-semibold underline decoration-brand decoration-2 underline-offset-4">Network</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white/30 text-xs">
          © 2025company Inc. All rights reserved. | 사업자등록번호: 000-00-00000 | 대표: 홍길동
        </div>
        <div className="flex gap-6 text-white/30 text-xs">
          <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
        </div>
      </div>
    </footer>
  );
}
