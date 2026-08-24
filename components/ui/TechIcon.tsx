import type { IconType } from "react-icons";
import {
  SiAnsible,
  SiArgo,
  SiDatadog,
  SiDocker,
  SiDynatrace,
  SiGithubactions,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiOpensearch,
  SiPython,
  SiSonarqube,
  SiTerraform,
  SiYaml,
} from "react-icons/si";
import {
  FaAws,
  FaChartLine,
  FaCubes,
  FaLanguage,
  FaLayerGroup,
  FaShieldHalved,
} from "react-icons/fa6";

type Meta = { Icon: IconType; color: string };

// Brand colours keep the stack recognisable at a glance.
const map: Record<string, Meta> = {
  aws: { Icon: FaAws, color: "#FF9900" },
  docker: { Icon: SiDocker, color: "#2496ED" },
  kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  ecs: { Icon: FaCubes, color: "#FF9900" },
  jenkins: { Icon: SiJenkins, color: "#D24939" },
  githubactions: { Icon: SiGithubactions, color: "#2088FF" },
  terraform: { Icon: SiTerraform, color: "#7B42BC" },
  cloudformation: { Icon: FaLayerGroup, color: "#E7157B" },
  datadog: { Icon: SiDatadog, color: "#7C3AED" },
  dynatrace: { Icon: SiDynatrace, color: "#1496FF" },
  cloudwatch: { Icon: FaChartLine, color: "#E7157B" },
  opensearch: { Icon: SiOpensearch, color: "#0EA5E9" },
  quantummetric: { Icon: FaChartLine, color: "#22D3EE" },
  ansible: { Icon: SiAnsible, color: "#EE0000" },
  argocd: { Icon: SiArgo, color: "#EF7B4D" },
  helm: { Icon: SiHelm, color: "#4F7DFF" },
  wiz: { Icon: FaShieldHalved, color: "#14B8A6" },
  sonarqube: { Icon: SiSonarqube, color: "#4E9BCD" },
  python: { Icon: SiPython, color: "#3B82F6" },
  yaml: { Icon: SiYaml, color: "#CB171E" },
  // used by certifications / focus areas
  language: { Icon: FaLanguage, color: "#22D3EE" },
};

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const meta = map[name] ?? { Icon: FaLayerGroup, color: "#94A3B8" };
  const { Icon, color } = meta;
  return <Icon className={className} style={{ color }} aria-hidden="true" />;
}

export function getTechColor(name: string) {
  return map[name]?.color ?? "#94A3B8";
}
