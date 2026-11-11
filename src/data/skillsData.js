import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap,
  SiPhp, SiSymfony, SiPython, SiDjango, SiMysql, SiPostgresql,
  SiSqlite, SiGit, SiGithub, SiLinux,
  SiC
} from 'react-icons/si';
import {
  FaNetworkWired,
  FaServer,
  FaTools,
  FaWindows
} from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 80, icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', level: 75, icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', level: 65, icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React.js', level: 67, icon: SiReact, color: '#61DAFB' },
      { name: 'Bootstrap', level: 85, icon: SiBootstrap, color: '#7952B3' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', level: 70, icon: SiPhp, color: '#777BB4' },
      { name: 'Symfony 7', level: 60, icon: SiSymfony, color: '#000000' },
      { name: 'Python', level: 55, icon: SiPython, color: '#3776AB' },
      { name: 'Django', level: 50, icon: SiDjango, color: '#092E20' },
      { name: 'C', level: 50, icon: SiC, color: '#A8B9CC' },
    ]
  },
  {
    title: 'Bases de données',
    skills: [
      { name: 'MySQL', level: 80, icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', level: 60, icon: SiPostgresql, color: '#4169E1' },
      { name: 'SQLite', level: 75, icon: SiSqlite, color: '#003B57' },
    ]
  },
  {
    title: 'Outils & DevOps',
    skills: [
      { name: 'Git', level: 75, icon: SiGit, color: '#F05032' },
      { name: 'GitHub', level: 75, icon: SiGithub, color: '#181717' },
      { name: 'VS Code', level: 90, icon: TbBrandVscode, color: '#007ACC' },
      { name: 'UML', level: 70, icon: FaTools, color: '#6C63FF' },
    ]
  },
  {
    title: 'Systèmes & Réseaux',
    skills: [
      { name: 'Linux (Ubuntu/Debian)', level: 70, icon: SiLinux, color: '#FCC624' },
      { name: 'Windows Server', level: 45, icon: FaWindows, color: '#0078D4' },
      { name: 'Réseaux (LAN/VLAN)', level: 40, icon: FaNetworkWired, color: '#4A90E2' },
      { name: 'Support IT', level: 80, icon: FaServer, color: '#6366F1' },
    ]
  }
];

export const technologies = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'Symfony', icon: SiSymfony, color: '#000000' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
];