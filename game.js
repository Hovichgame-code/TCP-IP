const layers = {
  access: {
    order: 1,
    english: "Network Access Layer",
    polish: "Warstwa dostępu do sieci",
    task: "Dostęp do medium transmisyjnego",
    description:
      "Kontroluje urządzenia fizyczne oraz media transmisyjne. Odpowiada za przesyłanie ramek danych w sieci lokalnej.",
    examples: "Ethernet, ARP, VLAN",
    color: "#2fb06d",
    bg: ["#d8f0e7", "#bce6d2"],
  },
  internet: {
    order: 2,
    english: "Internet Layer",
    polish: "Warstwa internetu",
    task: "Adresowanie i routing",
    description:
      "Odpowiada za logiczne adresowanie urządzeń oraz wybór najlepszej trasy przesyłania pakietów pomiędzy sieciami.",
    examples: "IPv4, IPv6, ICMP, BGP",
    color: "#2576d2",
    bg: ["#dcecff", "#b9d8ff"],
  },
  transport: {
    order: 3,
    english: "Transport Layer",
    polish: "Warstwa transportowa",
    task: "Transport danych",
    description:
      "Zapewnia komunikację między urządzeniami końcowymi, dzieli dane na segmenty i używa numerów portów.",
    examples: "TCP, UDP",
    color: "#7864d8",
    bg: ["#ebe6ff", "#d1c6ff"],
  },
  application: {
    order: 4,
    english: "Application Layer",
    polish: "Warstwa aplikacji",
    task: "Usługi dla użytkownika",
    description:
      "Warstwa najbliższa użytkownikowi. Działają tu przeglądarki, poczta, komunikatory i usługi aplikacyjne.",
    examples: "DNS, HTTP, HTTPS, SMTP",
    color: "#f3b334",
    bg: ["#fff1c8", "#ffd983"],
  },
};

const towers = [
  {
    id: "arp",
    name: "ARP Detective",
    icon: "ARP",
    layer: "access",
    english: "Address Resolution Protocol",
    polish: "Protokół odwzorowania adresów",
    port: "Nie dotyczy",
    description: "Tłumaczy adres IPv4 na odpowiadający mu adres MAC.",
    ability: "Odkrywa ukrytych przeciwników i zwiększa celność pobliskich wież.",
    cost: 45,
    range: 124,
    damage: 8,
    rate: 36,
    effect: "reveal",
  },
  {
    id: "ethernet",
    name: "Ethernet Warrior",
    icon: "ETH",
    layer: "access",
    english: "Ethernet",
    polish: "Ethernet",
    port: "Nie dotyczy",
    description: "Najpopularniejsza technologia sieci lokalnych LAN.",
    ability: "Podstawowa wieża obronna o stabilnym ataku.",
    cost: 40,
    range: 118,
    damage: 10,
    rate: 42,
  },
  {
    id: "vlan",
    name: "VLAN Architect",
    icon: "VLAN",
    layer: "access",
    english: "Virtual Local Area Network",
    polish: "Wirtualna sieć lokalna",
    port: "Nie dotyczy",
    description: "Logicznie dzieli jedną sieć fizyczną na kilka niezależnych sieci.",
    ability: "Spowalnia przeciwników w sektorze obronnym.",
    cost: 60,
    range: 132,
    damage: 5,
    rate: 55,
    effect: "slow",
  },
  {
    id: "switch",
    name: "Switch Master",
    icon: "SW",
    layer: "access",
    english: "Switch",
    polish: "Przełącznik",
    port: "Nie dotyczy",
    description: "Łączy urządzenia w sieci lokalnej.",
    ability: "Wzmacnia sąsiednie wieże.",
    cost: 50,
    range: 98,
    damage: 4,
    rate: 48,
    effect: "boost",
  },
  {
    id: "ip",
    name: "IP Ranger",
    icon: "IP",
    layer: "internet",
    english: "Internet Protocol",
    polish: "Protokół internetowy",
    port: "Nie dotyczy",
    description: "Podstawowy protokół odpowiedzialny za adresowanie i przesyłanie pakietów.",
    ability: "Podstawowa jednostka warstwy internetu.",
    cost: 55,
    range: 132,
    damage: 12,
    rate: 44,
  },
  {
    id: "ipv4",
    name: "IPv4 Soldier",
    icon: "IPv4",
    layer: "internet",
    english: "Internet Protocol Version 4",
    polish: "Protokół internetowy wersji 4",
    port: "Nie dotyczy",
    description: "Wykorzystuje adresy 32-bitowe, np. 192.168.1.1.",
    ability: "Zrównoważony obrońca o dobrym koszcie.",
    cost: 60,
    range: 136,
    damage: 13,
    rate: 46,
  },
  {
    id: "ipv6",
    name: "IPv6 Guardian",
    icon: "IPv6",
    layer: "internet",
    english: "Internet Protocol Version 6",
    polish: "Protokół internetowy wersji 6",
    port: "Nie dotyczy",
    description: "Wykorzystuje adresy 128-bitowe i ogromną przestrzeń adresową.",
    ability: "Ma większy zasięg niż IPv4 Soldier.",
    cost: 75,
    range: 170,
    damage: 12,
    rate: 48,
  },
  {
    id: "icmp",
    name: "ICMP Messenger",
    icon: "PING",
    layer: "internet",
    english: "Internet Control Message Protocol",
    polish: "Protokół komunikatów kontrolnych",
    port: "Nie dotyczy",
    description: "Służy do diagnostyki sieci i przesyłania komunikatów o błędach.",
    ability: "Ping zatrzymuje wroga na krótką chwilę.",
    cost: 65,
    range: 145,
    damage: 7,
    rate: 54,
    effect: "stun",
  },
  {
    id: "bgp",
    name: "BGP King",
    icon: "BGP",
    layer: "internet",
    english: "Border Gateway Protocol",
    polish: "Protokół bramy granicznej",
    port: "179 TCP",
    description: "Odpowiada za routing pomiędzy autonomicznymi systemami w Internecie.",
    ability: "Legendarny daleki atak na strategiczne kierunki ruchu.",
    cost: 110,
    range: 210,
    damage: 20,
    rate: 62,
  },
  {
    id: "tcp",
    name: "TCP Knight",
    icon: "TCP",
    layer: "transport",
    english: "Transmission Control Protocol",
    polish: "Protokół Sterowania Transmisją",
    port: "Zależny od aplikacji",
    description: "Połączeniowy, niezawodny, potwierdza odbiór i zachowuje kolejność pakietów.",
    ability: "ACK! Wolniejszy, ale gwarantuje trafienie.",
    cost: 70,
    range: 150,
    damage: 18,
    rate: 60,
    effect: "reliable",
  },
  {
    id: "udp",
    name: "UDP Ninja",
    icon: "UDP",
    layer: "transport",
    english: "User Datagram Protocol",
    polish: "Protokół Datagramów Użytkownika",
    port: "Zależny od aplikacji",
    description: "Bezpołączeniowy, bardzo szybki, z małymi opóźnieniami, ale bez gwarancji dostarczenia.",
    ability: "Szybki atak, czasem pudłuje.",
    cost: 60,
    range: 132,
    damage: 9,
    rate: 24,
    effect: "fast",
  },
  {
    id: "dns",
    name: "DNS Wizard",
    icon: "DNS",
    layer: "application",
    english: "Domain Name System",
    polish: "System Nazw Domen",
    port: "53 TCP/UDP",
    description: "Tłumaczy nazwy domen, np. google.com, na adresy IP urządzeń.",
    ability: "Name Resolution osłabia wrogów DNS Error.",
    cost: 70,
    range: 150,
    damage: 14,
    rate: 42,
    effect: "dns",
  },
  {
    id: "dhcp",
    name: "DHCP Fairy",
    icon: "DHCP",
    layer: "application",
    english: "Dynamic Host Configuration Protocol",
    polish: "Dynamiczna konfiguracja hosta",
    port: "67/68 UDP, 546/547 UDP",
    description: "Automatycznie przydziela adres IP oraz parametry sieciowe.",
    ability: "Wzmacnia nowe jednostki i szybko je aktywuje.",
    cost: 65,
    range: 136,
    damage: 8,
    rate: 44,
    effect: "boost",
  },
  {
    id: "smtp",
    name: "SMTP Postman",
    icon: "SMTP",
    layer: "application",
    english: "Simple Mail Transfer Protocol",
    polish: "Protokół przesyłania poczty",
    port: "25 TCP",
    description: "Służy do wysyłania wiadomości e-mail.",
    ability: "Wysyła wsparcie do innych wież.",
    cost: 65,
    range: 142,
    damage: 11,
    rate: 40,
  },
  {
    id: "http",
    name: "HTTP Scout",
    icon: "HTTP",
    layer: "application",
    english: "HyperText Transfer Protocol",
    polish: "Protokół przesyłania hipertekstu",
    port: "80 TCP",
    description: "Służy do przesyłania stron internetowych.",
    ability: "Szybka jednostka ataku usług WWW.",
    cost: 55,
    range: 128,
    damage: 10,
    rate: 32,
  },
  {
    id: "https",
    name: "HTTPS Paladin",
    icon: "TLS",
    layer: "application",
    english: "HyperText Transfer Protocol Secure",
    polish: "Bezpieczny HTTP",
    port: "443 TCP",
    description: "Zapewnia szyfrowaną komunikację internetową.",
    ability: "Tworzy tarczę ochronną i wzmacnia bezpieczeństwo.",
    cost: 85,
    range: 154,
    damage: 13,
    rate: 44,
    effect: "shield",
  },
];

const towerDesign = {
  arp: {
    attackName: "Skan ARP",
    attackKind: "scan",
    detail:
      "ARP Detective pyta: kto ma ten adres IPv4? Dzięki temu odkrywa ukryte błędy i ułatwia trafianie innym wieżom.",
    upgradeText: "Większy zasięg skanowania i mocniejsza premia do celności.",
  },
  ethernet: {
    attackName: "Ramka uderzeniowa",
    attackKind: "impact",
    detail:
      "Ethernet Warrior pakuje dane w ramki i broni sieci lokalnej. To tania, pewna wieża na początek każdej mapy.",
    upgradeText: "Szybsze ramki i większe obrażenia podstawowe.",
  },
  vlan: {
    attackName: "Mróz segmentacji",
    attackKind: "frost",
    detail:
      "VLAN Architect dzieli ruch na logiczne segmenty. W grze zamraża trasę i spowalnia błędy, które wpadną w sektor.",
    upgradeText: "Dłuższe spowolnienie i szerszy sektor obronny.",
  },
  switch: {
    attackName: "Przełączenie wsparcia",
    attackKind: "boost",
    detail:
      "Switch Master wie, gdzie wysłać ramkę w LAN. Wzmacnia sąsiednie wieże i sam zadaje małe obrażenia.",
    upgradeText: "Silniejsza aura wsparcia dla pobliskich wież.",
  },
  ip: {
    attackName: "Pakiet kierowany",
    attackKind: "impact",
    detail:
      "IP Ranger wybiera adres docelowy pakietu. Jest prosty, ale bardzo użyteczny przeciwko błędom routingu.",
    upgradeText: "Lepsze adresowanie celu i większa siła pakietu.",
  },
  ipv4: {
    attackName: "Salwa 32-bit",
    attackKind: "impact",
    detail:
      "IPv4 Soldier korzysta z 32-bitowych adresów. To zbalansowana wieża do regularnej obrony.",
    upgradeText: "Większe obrażenia i stabilniejsza szybkostrzelność.",
  },
  ipv6: {
    attackName: "Promień 128-bit",
    attackKind: "pierce",
    detail:
      "IPv6 Guardian ma ogromną przestrzeń adresową, więc widzi daleko i przebija się przez gęstsze fale.",
    upgradeText: "Jeszcze większy zasięg i mocniejszy atak przebijający.",
  },
  icmp: {
    attackName: "Ping impulsowy",
    attackKind: "stun",
    detail:
      "ICMP Messenger wysyła komunikaty diagnostyczne. Ping na chwilę zatrzymuje przeciwnika i pokazuje, co jest nie tak.",
    upgradeText: "Dłuższe zatrzymanie i krótszy czas przeładowania.",
  },
  bgp: {
    attackName: "Trasa między sieciami",
    attackKind: "fire",
    detail:
      "BGP King kontroluje kierunki ruchu między systemami autonomicznymi. Jego atak podpala problem i zadaje obrażenia w czasie.",
    upgradeText: "Silniejszy ogień i większy zasięg strategiczny.",
  },
  tcp: {
    attackName: "ACK precyzji",
    attackKind: "reliable",
    detail:
      "TCP Knight działa wolniej, ale potwierdza odbiór danych. Jego trafienia są precyzyjne i ignorują część odporności.",
    upgradeText: "Mocniejsze ACK i lepsza kontrola błędów.",
  },
  udp: {
    attackName: "Szybki datagram",
    attackKind: "rapid",
    detail:
      "UDP Ninja wysyła datagramy bez potwierdzeń. Strzela bardzo szybko, ale czasem pudłuje, tak jak UDP nie gwarantuje dostarczenia.",
    upgradeText: "Jeszcze szybsze datagramy i mniejsza szansa pudła.",
  },
  dns: {
    attackName: "Rozwiązanie nazwy",
    attackKind: "chain",
    detail:
      "DNS Wizard tłumaczy nazwy domen na adresy IP. W grze odbija atak na pobliskie błędy nazw.",
    upgradeText: "Lepsze łańcuchowe trafienie przeciw DNS Error i Spam.",
  },
  dhcp: {
    attackName: "Konfiguracja startowa",
    attackKind: "boost",
    detail:
      "DHCP Fairy automatycznie przydziela parametry sieci. Przyspiesza aktywację pobliskich wież i wspiera nowe obrony.",
    upgradeText: "Silniejsza aura konfiguracji i szybsze wsparcie.",
  },
  smtp: {
    attackName: "Paczka pocztowa",
    attackKind: "fire",
    detail:
      "SMTP Postman wysyła pocztę. W grze wysyła rozgrzane pakiety wsparcia, które zostawiają krótki efekt ognia.",
    upgradeText: "Większe obrażenia w czasie i szybsze wysyłki.",
  },
  http: {
    attackName: "Żądanie GET",
    attackKind: "rapid",
    detail:
      "HTTP Scout obsługuje strony WWW bez szyfrowania. Strzela szybko i tanio, dobry do łapania lekkich błędów.",
    upgradeText: "Szybsze żądania i lepsze obrażenia na sekundę.",
  },
  https: {
    attackName: "Tarcza TLS",
    attackKind: "shield",
    detail:
      "HTTPS Paladin szyfruje komunikację. W grze tworzy ochronę rdzenia i osłabia ataki bezpieczeństwa.",
    upgradeText: "Mocniejsza tarcza i większy zasięg ochrony.",
  },
};

towers.forEach((tower) => {
  Object.assign(tower, towerDesign[tower.id]);
  tower.upgradeBase = Math.max(35, Math.round(tower.cost * 0.7));
  tower.sellRatio = 0.6;
});

const gameTowerIds = new Set(["ethernet", "vlan", "ip", "icmp", "tcp", "udp", "dns", "https", "bgp"]);

const towerBalance = {
  arp: { cost: 45, damage: 6, range: 135, rate: 48 },
  ethernet: { cost: 38, damage: 8, range: 118, rate: 36 },
  vlan: { cost: 64, damage: 3, range: 152, rate: 64 },
  switch: { cost: 54, damage: 3, range: 110, rate: 54 },
  ip: { cost: 56, damage: 10, range: 138, rate: 45 },
  ipv4: { cost: 62, damage: 10, range: 132, rate: 40 },
  ipv6: { cost: 84, damage: 9, range: 188, rate: 56 },
  icmp: { cost: 72, damage: 5, range: 154, rate: 72 },
  bgp: { cost: 165, damage: 14, range: 230, rate: 92, minWave: 10 },
  tcp: { cost: 82, damage: 18, range: 150, rate: 78 },
  udp: { cost: 58, damage: 5, range: 126, rate: 22 },
  dns: { cost: 78, damage: 9, range: 158, rate: 42 },
  dhcp: { cost: 66, damage: 5, range: 145, rate: 52 },
  smtp: { cost: 68, damage: 9, range: 142, rate: 46 },
  http: { cost: 56, damage: 6, range: 128, rate: 26 },
  https: { cost: 95, damage: 10, range: 165, rate: 58 },
};

towers.forEach((tower) => {
  Object.assign(tower, towerBalance[tower.id]);
  tower.upgradeBase = Math.max(35, Math.round(tower.cost * 0.72));
});

const concepts = [
  {
    name: "MAC Address Beacon",
    icon: "MAC",
    layer: "access",
    english: "Media Access Control Address",
    polish: "Adres MAC",
    port: "Nie dotyczy",
    description: "Unikalny fizyczny adres urządzenia sieciowego.",
    ability: "Wzmacnia współpracę urządzeń lokalnych.",
  },
  {
    name: "Frame Carrier",
    icon: "FRM",
    layer: "access",
    english: "Frame",
    polish: "Ramka",
    port: "Nie dotyczy",
    description: "Jednostka danych przesyłana w warstwie dostępu do sieci.",
    ability: "Dostarcza zasoby i bonusy między wieżami.",
  },
  {
    name: "NIC Activator",
    icon: "NIC",
    layer: "access",
    english: "Network Interface Card",
    polish: "Karta sieciowa",
    port: "Nie dotyczy",
    description: "Umożliwia urządzeniu komunikację z siecią.",
    ability: "Odblokowuje specjalne miejsca budowy.",
  },
  {
    name: "NAT Shapeshifter",
    icon: "NAT",
    layer: "internet",
    english: "Network Address Translation",
    polish: "Translacja adresów sieciowych",
    port: "Nie dotyczy",
    description: "Zamienia adresy prywatne na publiczne i odwrotnie.",
    ability: "Przekierowuje ruch i myli przeciwników.",
  },
  {
    name: "OSPF Dragon",
    icon: "OSPF",
    layer: "internet",
    english: "Open Shortest Path First",
    polish: "Otwarty protokół najkrótszej ścieżki",
    port: "Nie dotyczy",
    description: "Dynamicznie wyznacza najlepszą trasę w sieci.",
    ability: "Optymalizuje trasy ataków sojuszników.",
  },
  {
    name: "EIGRP Engineer",
    icon: "EIGRP",
    layer: "internet",
    english: "Enhanced Interior Gateway Routing Protocol",
    polish: "Ulepszony protokół routingu wewnętrznego",
    port: "Nie dotyczy",
    description: "Wydajny protokół routingu stosowany głównie przez urządzenia Cisco.",
    ability: "Przyspiesza współpracę wież.",
  },
  {
    name: "SLAAC Angel",
    icon: "SLAAC",
    layer: "application",
    english: "Stateless Address Autoconfiguration",
    polish: "Bezstanowa autokonfiguracja adresów",
    port: "Nie dotyczy",
    description: "Pozwala urządzeniom samodzielnie utworzyć adres IPv6.",
    ability: "Automatycznie wzmacnia jednostki IPv6.",
  },
  {
    name: "FTP Worker",
    icon: "FTP",
    layer: "application",
    english: "File Transfer Protocol",
    polish: "Protokół transferu plików",
    port: "20 i 21 TCP",
    description: "Umożliwia przesyłanie plików między urządzeniami.",
    ability: "Przenosi zasoby między punktami mapy.",
  },
  {
    name: "SFTP Guard",
    icon: "SFTP",
    layer: "application",
    english: "SSH File Transfer Protocol",
    polish: "Bezpieczny transfer plików przez SSH",
    port: "22 TCP",
    description: "Zapewnia szyfrowany transfer plików.",
    ability: "Chroni transfer zasobów.",
  },
  {
    name: "POP3 Collector",
    icon: "POP3",
    layer: "application",
    english: "Post Office Protocol version 3",
    polish: "Protokół odbioru poczty",
    port: "110 TCP",
    description: "Pobiera wiadomości z serwera na urządzenie użytkownika.",
    ability: "Zbiera zasoby i bonusy.",
  },
  {
    name: "IMAP Master",
    icon: "IMAP",
    layer: "application",
    english: "Internet Message Access Protocol",
    polish: "Protokół dostępu do poczty",
    port: "143 TCP",
    description: "Synchronizuje wiadomości między serwerem a urządzeniem.",
    ability: "Synchronizuje efekty między wieżami.",
  },
  {
    name: "REST Robot",
    icon: "REST",
    layer: "application",
    english: "Representational State Transfer",
    polish: "Styl komunikacji API",
    port: "Nie dotyczy",
    description: "Umożliwia wymianę danych pomiędzy aplikacjami i usługami sieciowymi.",
    ability: "Synchronizuje działanie wież.",
  },
];

const portList = [
  ["DNS", "53 TCP/UDP", "Tłumaczenie nazw domen na adresy IP"],
  ["DHCPv4", "67, 68 UDP", "Automatyczna konfiguracja IPv4"],
  ["DHCPv6", "546, 547 UDP", "Automatyczna konfiguracja IPv6"],
  ["SMTP", "25 TCP", "Wysyłanie poczty"],
  ["POP3", "110 TCP", "Odbieranie poczty na urządzenie"],
  ["IMAP", "143 TCP", "Synchronizacja poczty"],
  ["FTP", "20, 21 TCP", "Transfer plików"],
  ["SFTP", "22 TCP", "Szyfrowany transfer plików przez SSH"],
  ["TFTP", "69 UDP", "Prosty transfer konfiguracji"],
  ["HTTP", "80 TCP", "Strony internetowe"],
  ["HTTPS", "443 TCP", "Szyfrowane strony internetowe"],
  ["BGP", "179 TCP", "Routing między systemami autonomicznymi"],
];

const portQuizFacts = [
  { protocol: "DNS", port: "53 TCP/UDP", hint: "Tłumaczy nazwy domen na adresy IP.", trap: "Bez DNS wpisujesz IP zamiast nazw stron." },
  { protocol: "DHCPv4", port: "67, 68 UDP", hint: "Automatycznie rozdaje konfigurację IPv4.", trap: "Bez DHCP host może nie dostać adresu." },
  { protocol: "DHCPv6", port: "546, 547 UDP", hint: "Pomaga przy automatycznej konfiguracji IPv6.", trap: "Klient i serwer DHCPv6 używają innych portów." },
  { protocol: "SMTP", port: "25 TCP", hint: "Służy do wysyłania poczty.", trap: "To nie jest protokół do wygodnego czytania skrzynki." },
  { protocol: "POP3", port: "110 TCP", hint: "Pobiera pocztę na urządzenie.", trap: "Często kojarzy się z pobieraniem wiadomości lokalnie." },
  { protocol: "IMAP", port: "143 TCP", hint: "Synchronizuje pocztę między klientem i serwerem.", trap: "Dobre, gdy skrzynka ma działać na wielu urządzeniach." },
  { protocol: "FTP", port: "20, 21 TCP", hint: "Transfer plików, osobne kanały danych i sterowania.", trap: "Klasyczny FTP nie szyfruje transmisji." },
  { protocol: "SFTP", port: "22 TCP", hint: "Bezpieczny transfer plików przez SSH.", trap: "Dzieli port z SSH." },
  { protocol: "TFTP", port: "69 UDP", hint: "Prosty transfer używany np. przy konfiguracji urządzeń.", trap: "Jest prosty i korzysta z UDP." },
  { protocol: "HTTP", port: "80 TCP", hint: "Strony WWW bez szyfrowania.", trap: "Przeglądarka używa go, gdy nie ma kłódki HTTPS." },
  { protocol: "HTTPS", port: "443 TCP", hint: "Szyfrowane strony WWW.", trap: "Ten port najczęściej widzisz przy bezpiecznych stronach." },
  { protocol: "BGP", port: "179 TCP", hint: "Routing między systemami autonomicznymi.", trap: "To port króla tras internetowych." },
];

const tcpIpQuestions = [
  {
    label: "Model TCP/IP",
    title: "Ile warstw ma model TCP/IP?",
    correct: "4",
    answers: ["3", "4", "5", "7"],
    explain: "Model TCP/IP ma 4 warstwy: dostępu do sieci, internetu, transportową i aplikacji.",
  },
  {
    label: "Kolejność warstw",
    title: "Która kolejność od najwyższej warstwy do najniższej jest poprawna?",
    correct: "Application → Transport → Internet → Network Access",
    answers: [
      "Application → Transport → Internet → Network Access",
      "Transport → Application → Network Access → Internet",
      "Network Access → Application → Internet → Transport",
      "Internet → Transport → Application → Network Access",
    ],
    explain: "Aplikacja jest najbliżej użytkownika, a Network Access najbliżej medium transmisyjnego.",
  },
  {
    label: "Warstwa dostępu",
    title: "Która warstwa odpowiada za ramki, adres MAC, Ethernet i przełącznik?",
    correct: "Warstwa dostępu do sieci",
    answers: ["Warstwa aplikacji", "Warstwa transportowa", "Warstwa internetu", "Warstwa dostępu do sieci"],
    explain: "Ta warstwa działa w sieci lokalnej i przenosi ramki przez medium.",
  },
  {
    label: "Warstwa internetu",
    title: "Która warstwa odpowiada za adresowanie IP i routing między sieciami?",
    correct: "Warstwa internetu",
    answers: ["Warstwa aplikacji", "Warstwa transportowa", "Warstwa internetu", "Warstwa dostępu do sieci"],
    explain: "Warstwa internetu wybiera trasę i używa adresów IPv4/IPv6.",
  },
  {
    label: "Warstwa transportowa",
    title: "Która warstwa używa portów i protokołów TCP oraz UDP?",
    correct: "Warstwa transportowa",
    answers: ["Warstwa aplikacji", "Warstwa transportowa", "Warstwa internetu", "Warstwa dostępu do sieci"],
    explain: "Transport dostarcza dane do właściwej aplikacji dzięki numerom portów.",
  },
  {
    label: "Warstwa aplikacji",
    title: "W której warstwie działają DNS, HTTP, HTTPS, SMTP, POP3 i IMAP?",
    correct: "Warstwa aplikacji",
    answers: ["Warstwa aplikacji", "Warstwa transportowa", "Warstwa internetu", "Warstwa dostępu do sieci"],
    explain: "To usługi najbliższe użytkownikowi i aplikacjom.",
  },
  {
    label: "TCP kontra UDP",
    title: "Który protokół jest połączeniowy i potwierdza odbiór danych?",
    correct: "TCP",
    answers: ["TCP", "UDP", "ARP", "Ethernet"],
    explain: "TCP jest niezawodny, kontroluje błędy i zachowuje kolejność segmentów.",
  },
  {
    label: "TCP kontra UDP",
    title: "Który protokół jest szybszy, bezpołączeniowy i nie gwarantuje dostarczenia?",
    correct: "UDP",
    answers: ["TCP", "UDP", "BGP", "SMTP"],
    explain: "UDP ma małe opóźnienia, dlatego pasuje np. do gier online, streamingu i VoIP.",
  },
  {
    label: "ARP",
    title: "Co robi ARP?",
    correct: "Tłumaczy adres IPv4 na adres MAC",
    answers: [
      "Tłumaczy adres IPv4 na adres MAC",
      "Szyfruje strony WWW",
      "Wysyła pocztę e-mail",
      "Wyznacza trasy między systemami autonomicznymi",
    ],
    explain: "ARP pomaga urządzeniom w LAN znaleźć fizyczny adres MAC dla adresu IPv4.",
  },
  {
    label: "IPv4 i IPv6",
    title: "Które zdanie o IPv6 jest poprawne?",
    correct: "IPv6 używa adresów 128-bitowych",
    answers: [
      "IPv6 używa adresów 128-bitowych",
      "IPv6 używa wyłącznie portu 80",
      "IPv6 zastępuje warstwę transportową",
      "IPv6 jest protokołem pocztowym",
    ],
    explain: "IPv4 ma adresy 32-bitowe, a IPv6 128-bitowe.",
  },
  {
    label: "Routing",
    title: "Do czego służy routing?",
    correct: "Do wyboru trasy przesyłania pakietów między sieciami",
    answers: [
      "Do wyboru trasy przesyłania pakietów między sieciami",
      "Do zamiany tekstu na obraz",
      "Do synchronizacji poczty",
      "Do tworzenia ramek w Ethernet",
    ],
    explain: "Routing decyduje, którędy pakiet ma dotrzeć do celu.",
  },
  {
    label: "VLAN",
    title: "Co umożliwia VLAN?",
    correct: "Logiczny podział jednej sieci fizycznej na kilka sieci",
    answers: [
      "Logiczny podział jednej sieci fizycznej na kilka sieci",
      "Potwierdzanie każdego segmentu TCP",
      "Tłumaczenie domen na IP",
      "Wysyłanie wiadomości e-mail",
    ],
    explain: "VLAN porządkuje ruch i oddziela grupy urządzeń w LAN.",
  },
  {
    label: "DNS",
    title: "Co robi DNS?",
    correct: "Tłumaczy nazwy domen na adresy IP",
    answers: [
      "Tłumaczy nazwy domen na adresy IP",
      "Przydziela fizyczne adresy MAC",
      "Dzieli sieć na VLAN",
      "Steruje medium transmisyjnym",
    ],
    explain: "Dzięki DNS możesz wpisać nazwę strony zamiast adresu IP.",
  },
  {
    label: "BGP",
    title: "Za co odpowiada BGP?",
    correct: "Routing między systemami autonomicznymi w Internecie",
    answers: [
      "Routing między systemami autonomicznymi w Internecie",
      "Automatyczne przydzielanie adresu hostowi",
      "Odbieranie poczty z serwera",
      "Przesyłanie ramek w LAN",
    ],
    explain: "BGP pomaga dużym sieciom Internetu wybierać trasy między sobą.",
  },
];

tcpIpQuestions.push(
  {
    label: "Porty",
    title: "Który port jest domyślny dla HTTPS?",
    correct: "443 TCP",
    answers: ["80 TCP", "443 TCP", "53 UDP", "25 TCP"],
    explain: "HTTPS używa szyfrowanej komunikacji WWW i standardowo działa na porcie 443 TCP.",
  },
  {
    label: "Porty",
    title: "Który port jest domyślny dla HTTP?",
    correct: "80 TCP",
    answers: ["80 TCP", "110 TCP", "179 TCP", "69 UDP"],
    explain: "HTTP bez szyfrowania standardowo działa na porcie 80 TCP.",
  },
  {
    label: "Porty",
    title: "Który protokół używa portu 53 TCP/UDP?",
    correct: "DNS",
    answers: ["DNS", "SMTP", "BGP", "TFTP"],
    explain: "DNS tłumaczy nazwy domen na adresy IP.",
  },
  {
    label: "Porty",
    title: "Które porty są związane z DHCPv4?",
    correct: "67 i 68 UDP",
    answers: ["67 i 68 UDP", "20 i 21 TCP", "546 i 547 UDP", "143 TCP"],
    explain: "DHCPv4 używa UDP 67 i 68 do konfiguracji hosta.",
  },
  {
    label: "Porty",
    title: "Który port jest używany przez BGP?",
    correct: "179 TCP",
    answers: ["179 TCP", "443 TCP", "69 UDP", "25 TCP"],
    explain: "BGP wymienia informacje routingu między systemami autonomicznymi.",
  },
  {
    label: "Warstwy",
    title: "Czy Ethernet należy do warstwy aplikacji?",
    correct: "Nie, do warstwy dostępu do sieci",
    answers: ["Tak", "Nie, do warstwy dostępu do sieci", "Nie, do warstwy transportowej", "Nie, do warstwy internetu"],
    explain: "Ethernet działa lokalnie i przenosi ramki w warstwie dostępu do sieci.",
  },
  {
    label: "Warstwy",
    title: "Która warstwa jest najbliżej użytkownika?",
    correct: "Warstwa aplikacji",
    answers: ["Warstwa aplikacji", "Warstwa transportowa", "Warstwa internetu", "Warstwa dostępu do sieci"],
    explain: "W tej warstwie działają usługi takie jak DNS, HTTP i poczta.",
  },
  {
    label: "Warstwy",
    title: "Która warstwa jest najbliżej kabla, Wi-Fi i karty sieciowej?",
    correct: "Warstwa dostępu do sieci",
    answers: ["Warstwa aplikacji", "Warstwa transportowa", "Warstwa internetu", "Warstwa dostępu do sieci"],
    explain: "Network Access Layer odpowiada za medium, ramki i lokalną komunikację.",
  },
  {
    label: "Pojęcia",
    title: "Czym jest ramka?",
    correct: "Jednostką danych w warstwie dostępu do sieci",
    answers: [
      "Jednostką danych w warstwie dostępu do sieci",
      "Adresem strony internetowej",
      "Numerem portu aplikacji",
      "Protokołem poczty",
    ],
    explain: "Frame, czyli ramka, działa w najniższej warstwie modelu TCP/IP.",
  },
  {
    label: "Pojęcia",
    title: "Do czego służy przełącznik Switch?",
    correct: "Łączy urządzenia w sieci lokalnej",
    answers: [
      "Łączy urządzenia w sieci lokalnej",
      "Tłumaczy domeny na IP",
      "Wysyła e-mail",
      "Zastępuje TCP",
    ],
    explain: "Switch działa w LAN i kieruje ramki do właściwych urządzeń.",
  },
  {
    label: "IPv4/IPv6",
    title: "Ile bitów ma adres IPv4?",
    correct: "32 bity",
    answers: ["32 bity", "64 bity", "128 bitów", "443 bity"],
    explain: "IPv4 używa adresów 32-bitowych, np. 192.168.1.1.",
  },
  {
    label: "IPv4/IPv6",
    title: "Ile bitów ma adres IPv6?",
    correct: "128 bitów",
    answers: ["32 bity", "64 bity", "128 bitów", "179 bitów"],
    explain: "IPv6 ma znacznie większą przestrzeń adresową niż IPv4.",
  },
  {
    label: "NAT",
    title: "Co robi NAT?",
    correct: "Tłumaczy adresy prywatne na publiczne i odwrotnie",
    answers: [
      "Tłumaczy adresy prywatne na publiczne i odwrotnie",
      "Odbiera pocztę z serwera",
      "Zamienia TCP na UDP",
      "Tworzy adres MAC",
    ],
    explain: "NAT pomaga wielu urządzeniom prywatnym korzystać z adresu publicznego.",
  },
  {
    label: "ICMP",
    title: "Do czego służy ICMP?",
    correct: "Do diagnostyki i komunikatów o błędach",
    answers: [
      "Do diagnostyki i komunikatów o błędach",
      "Do wysyłania poczty",
      "Do szyfrowania HTTPS",
      "Do synchronizacji IMAP",
    ],
    explain: "Ping korzysta z ICMP do sprawdzania osiągalności hosta.",
  },
  {
    label: "Poczta",
    title: "Który protokół wysyła e-mail?",
    correct: "SMTP",
    answers: ["SMTP", "POP3", "IMAP", "ARP"],
    explain: "SMTP służy do wysyłania wiadomości e-mail.",
  },
  {
    label: "Poczta",
    title: "Który protokół synchronizuje pocztę między serwerem a urządzeniami?",
    correct: "IMAP",
    answers: ["SMTP", "POP3", "IMAP", "BGP"],
    explain: "IMAP pozwala mieć tę samą skrzynkę na wielu urządzeniach.",
  },
  {
    label: "Pliki",
    title: "Który protokół zapewnia bezpieczny transfer plików przez SSH?",
    correct: "SFTP",
    answers: ["FTP", "SFTP", "TFTP", "HTTP"],
    explain: "SFTP używa SSH i standardowo portu 22 TCP.",
  },
  {
    label: "Routing",
    title: "Który protokół wyznacza trasy między systemami autonomicznymi?",
    correct: "BGP",
    answers: ["BGP", "ARP", "UDP", "POP3"],
    explain: "BGP to ważny protokół routingu Internetu.",
  }
);

const trainingState = {
  lessonIndex: 0,
  questionIndex: 0,
  xp: 0,
  hearts: 5,
  streak: 0,
  completed: new Set(),
};

const lessons = [
  {
    title: "Warstwy TCP/IP",
    color: "#2fb06d",
    questions: tcpIpQuestions.filter((question) => ["Model TCP/IP", "Kolejność warstw", "Warstwy"].includes(question.label)),
  },
  {
    title: "Adresowanie i routing",
    color: "#2576d2",
    questions: tcpIpQuestions.filter((question) => ["IPv4/IPv6", "Routing", "NAT", "ICMP"].includes(question.label)),
  },
  {
    title: "TCP i UDP",
    color: "#7864d8",
    questions: tcpIpQuestions.filter((question) => question.label === "TCP kontra UDP"),
  },
  {
    title: "Porty i usługi",
    color: "#f3b334",
    questions: tcpIpQuestions.filter((question) => ["Porty", "Poczta", "Pliki"].includes(question.label)),
  },
  {
    title: "LAN i pojęcia",
    color: "#20a7b8",
    questions: tcpIpQuestions.filter((question) => ["Warstwa dostępu", "Pojęcia", "VLAN", "ARP", "DNS"].includes(question.label)),
  },
];

const enemiesCatalog = [
  { name: "DNS Error", icon: "?", shape: "hex", hp: 36, speed: 0.88, type: "application", color: "#f3b334", weak: "chain", resist: "impact", note: "Awaria rozwiązywania nazw domen." },
  { name: "Packet Loss", icon: "DROP", shape: "diamond", hp: 30, speed: 1.12, type: "transport", color: "#7864d8", weak: "reliable", resist: "rapid", note: "Pakiety znikają po drodze." },
  { name: "Wrong Gateway", icon: "GW", shape: "sign", hp: 46, speed: 0.78, type: "internet", color: "#2576d2", weak: "impact", resist: "frost", note: "Ruch idzie do złej bramy." },
  { name: "Timeout", icon: "TIME", shape: "clock", hp: 42, speed: 0.72, type: "transport", color: "#8b6dff", weak: "stun", resist: "fire", note: "Odpowiedź nie przychodzi na czas." },
  { name: "Intrusion Alert", icon: "!", shape: "alert", hp: 58, speed: 0.92, type: "application", color: "#ea5b5b", weak: "shield", resist: "rapid", note: "Podejrzany ruch próbuje naruszyć bezpieczeństwo." },
  { name: "Spam Flood", icon: "MAIL", shape: "blob", hp: 40, speed: 1.0, type: "application", color: "#d66a24", weak: "fire", resist: "chain", note: "Zalewa usługę nadmiarem wiadomości." },
  { name: "Routing Loop", icon: "LOOP", shape: "loop", hp: 64, speed: 0.72, type: "internet", color: "#135bad", weak: "fire", resist: "rapid", note: "Pakiety krążą zamiast dotrzeć do celu." },
  { name: "No IP Address", icon: "0.0", shape: "plug", hp: 48, speed: 0.84, type: "application", color: "#20a7b8", weak: "boost", resist: "stun", note: "Host nie dostał konfiguracji adresu." },
  { name: "Frame Corruptor", icon: "CRC", shape: "jagged", hp: 44, speed: 0.9, type: "access", color: "#2fb06d", weak: "scan", resist: "fire", note: "Ramki w LAN mają błędy." },
  { name: "MTU Mismatch", icon: "MTU", shape: "block", hp: 54, speed: 0.74, type: "internet", color: "#5a9ad6", weak: "pierce", resist: "impact", note: "Pakiety są za duże dla trasy." },
  { name: "Port Confusion", icon: "PORT", shape: "key", hp: 38, speed: 1.05, type: "transport", color: "#b46bd8", weak: "reliable", resist: "frost", note: "Usługa słucha na złym porcie." },
  { name: "VLAN Leak", icon: "LEAK", shape: "drop", hp: 52, speed: 0.82, type: "access", color: "#21a064", weak: "frost", resist: "chain", note: "Ruch miesza się między segmentami." },
];

const maps = [
  {
    name: "LAN Labirynt",
    description: "Długa trasa przez lokalną sieć. Dobra do nauki podstaw i testowania mrozu VLAN.",
    core: { x: 945, y: 207, width: 58, height: 86 },
    slots: [
      { x: 88, y: 132 }, { x: 242, y: 132 }, { x: 466, y: 124 }, { x: 698, y: 132 },
      { x: 246, y: 300 }, { x: 470, y: 316 }, { x: 706, y: 318 }, { x: 930, y: 356 },
      { x: 92, y: 508 }, { x: 270, y: 528 }, { x: 512, y: 520 }, { x: 742, y: 535 },
    ],
    path: [
      { x: -30, y: 220 }, { x: 150, y: 220 }, { x: 150, y: 410 }, { x: 365, y: 410 },
      { x: 365, y: 220 }, { x: 590, y: 220 }, { x: 590, y: 420 }, { x: 830, y: 420 },
      { x: 830, y: 250 }, { x: 1060, y: 250 },
    ],
  },
  {
    name: "Router Canyon",
    description: "Dwie długie proste i ciasny skręt. Wieże o dużym zasięgu mają tu świetny moment.",
    core: { x: 930, y: 452, width: 68, height: 72 },
    slots: [
      { x: 90, y: 230 }, { x: 230, y: 90 }, { x: 386, y: 285 }, { x: 615, y: 112 },
      { x: 770, y: 124 }, { x: 886, y: 322 }, { x: 116, y: 452 }, { x: 354, y: 535 },
      { x: 610, y: 570 }, { x: 858, y: 558 }, { x: 628, y: 318 }, { x: 364, y: 88 },
    ],
    path: [
      { x: -30, y: 330 }, { x: 240, y: 330 }, { x: 240, y: 180 }, { x: 500, y: 180 },
      { x: 500, y: 470 }, { x: 735, y: 470 }, { x: 735, y: 212 }, { x: 910, y: 212 },
      { x: 910, y: 490 }, { x: 1060, y: 490 },
    ],
  },
  {
    name: "Chmura Portów",
    description: "Krótka, szybka mapa z wieloma polami przy ścieżce. Quizy portowe pasują tu idealnie.",
    core: { x: 930, y: 84, width: 68, height: 78 },
    slots: [
      { x: 84, y: 392 }, { x: 310, y: 565 }, { x: 96, y: 180 }, { x: 302, y: 158 },
      { x: 480, y: 320 }, { x: 500, y: 540 }, { x: 720, y: 354 }, { x: 742, y: 142 },
      { x: 914, y: 228 }, { x: 130, y: 570 }, { x: 596, y: 118 }, { x: 862, y: 420 },
    ],
    path: [
      { x: -30, y: 500 }, { x: 200, y: 500 }, { x: 200, y: 250 }, { x: 375, y: 250 },
      { x: 375, y: 430 }, { x: 610, y: 430 }, { x: 610, y: 250 }, { x: 860, y: 250 },
      { x: 860, y: 120 }, { x: 1060, y: 120 },
    ],
  },
];

const state = {
  view: "intro",
  worldIndex: 0,
  currentMapIndex: 0,
  wave: 1,
  energy: 120,
  health: 20,
  selectedTower: null,
  selectedPlacedTowerId: null,
  placed: [],
  enemies: [],
  projectiles: [],
  particles: [],
  runningWave: false,
  spawnTimer: 0,
  enemiesToSpawn: 0,
  kills: 0,
  unlockedLayers: ["access"],
  quizOpen: false,
  quizAdvances: true,
  askedQuizTitles: [],
  campaignWon: false,
};

const worldOrder = ["access", "internet", "transport", "application"];
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let lastFrame = performance.now();

const el = {
  tabs: document.querySelectorAll(".tab"),
  views: document.querySelectorAll(".view"),
  layerCards: document.querySelectorAll(".layer-card"),
  layerDetails: document.getElementById("layerDetails"),
  towerList: document.getElementById("towerList"),
  selectedInfo: document.getElementById("selectedInfo"),
  worldNumber: document.getElementById("worldNumber"),
  waveNumber: document.getElementById("waveNumber"),
  energyAmount: document.getElementById("energyAmount"),
  baseHealth: document.getElementById("baseHealth"),
  worldLabel: document.getElementById("worldLabel"),
  worldTitle: document.getElementById("worldTitle"),
  worldDescription: document.getElementById("worldDescription"),
  mapSelect: document.getElementById("mapSelect"),
  mapDescription: document.getElementById("mapDescription"),
  logFeed: document.getElementById("logFeed"),
  bossBadge: document.getElementById("bossBadge"),
  quizModal: document.getElementById("quizModal"),
  quizType: document.getElementById("quizType"),
  quizTitle: document.getElementById("quizTitle"),
  answers: document.getElementById("answers"),
  quizFeedback: document.getElementById("quizFeedback"),
  glossaryGrid: document.getElementById("glossaryGrid"),
  searchInput: document.getElementById("searchInput"),
  portsTable: document.getElementById("portsTable"),
  trainingXp: document.getElementById("trainingXp"),
  trainingHearts: document.getElementById("trainingHearts"),
  trainingStreak: document.getElementById("trainingStreak"),
  lessonList: document.getElementById("lessonList"),
  lessonLabel: document.getElementById("lessonLabel"),
  lessonTitle: document.getElementById("lessonTitle"),
  lessonPrompt: document.getElementById("lessonPrompt"),
  lessonAnswers: document.getElementById("lessonAnswers"),
  lessonFeedback: document.getElementById("lessonFeedback"),
  summaryModal: document.getElementById("summaryModal"),
  summaryContent: document.getElementById("summaryContent"),
};

function showView(view) {
  state.view = view;
  el.views.forEach((node) => node.classList.toggle("is-active", node.id === view));
  el.tabs.forEach((node) => node.classList.toggle("is-active", node.dataset.view === view));
}

function layerColor(layer) {
  return layers[layer]?.color || "#2576d2";
}

function currentWorld() {
  return worldOrder[state.worldIndex];
}

function currentMap() {
  return maps[state.currentMapIndex];
}

function buildSlots() {
  return currentMap().slots;
}

function activePath() {
  return currentMap().path;
}

function availableTowers() {
  return towers.filter((tower) =>
    gameTowerIds.has(tower.id) &&
    state.unlockedLayers.includes(tower.layer) &&
    (!tower.minWave || state.wave >= tower.minWave)
  );
}

function renderIntroLayer(layerKey) {
  const layer = layers[layerKey];
  const names = [...towers, ...concepts]
    .filter((item) => item.layer === layerKey)
    .map((item) => item.name)
    .join(", ");
  el.layerDetails.innerHTML = `
    <h2>${layer.english}</h2>
    <p><strong>${layer.polish}</strong></p>
    <p>${layer.description}</p>
    <p><strong>Główne zadanie:</strong> ${layer.task}</p>
    <p><strong>Przykłady:</strong> ${layer.examples}</p>
    <p><strong>Bohaterowie:</strong> ${names}</p>
  `;
  el.layerCards.forEach((card) => card.classList.toggle("is-selected", card.dataset.layer === layerKey));
}

function towerCard(tower) {
  const locked = !state.unlockedLayers.includes(tower.layer);
  const button = document.createElement("button");
  button.className = "tower-button";
  button.type = "button";
  button.disabled = locked;
  button.title = `${tower.english} - ${tower.polish}. ${tower.description}`;
  button.innerHTML = `
    <span class="tower-icon" style="background:${layerColor(tower.layer)}">${tower.icon}</span>
    <span class="tower-meta">
      <strong>${tower.name}</strong>
      <small>${tower.attackName} · ${tower.polish}</small>
      <span class="tower-stats">
        <span>Koszt ${tower.cost}</span>
        <span>DMG ${tower.damage}</span>
        <span>SPD ${attackSpeed(tower)}/s</span>
      </span>
    </span>
  `;
  button.addEventListener("click", () => {
    state.selectedTower = tower.id;
    state.selectedPlacedTowerId = null;
    renderTowerList();
    renderSelectedInfo(tower);
  });
  if (state.selectedTower === tower.id) button.classList.add("is-selected");
  return button;
}

function renderTowerList() {
  el.towerList.innerHTML = "";
  availableTowers().forEach((tower) => el.towerList.appendChild(towerCard(tower)));
}

function renderSelectedInfo(item) {
  const isPlaced = item.instanceId;
  const nextCost = isPlaced ? upgradeCost(item) : item.cost;
  const sell = isPlaced ? sellValue(item) : 0;
  const damage = Number.isFinite(item.damage) ? Math.round(item.damage) : "-";
  const range = Number.isFinite(item.range) ? Math.round(item.range) : "-";
  const speed = Number.isFinite(item.rate) ? Math.round(100 / item.rate * 10) / 10 : "-";
  el.selectedInfo.innerHTML = `
    <h3>${item.name}</h3>
    <p><strong>${item.english}</strong> → ${item.polish}</p>
    <p><strong>Port:</strong> ${item.port}</p>
    <p>${item.description}</p>
    <p>${item.detail || ""}</p>
    <p><strong>Efekt:</strong> ${item.ability}</p>
    <p><strong>Atak:</strong> ${item.attackName || "Standard"} (${attackLabel(item.attackKind)})</p>
    <div class="stat-grid">
      <span class="stat-pill">Obrażenia: ${damage}</span>
      <span class="stat-pill">Zasięg: ${range}</span>
      <span class="stat-pill">Szybkość ataku: ${speed}/s</span>
      <span class="stat-pill">Poziom: ${item.level || 1}</span>
    </div>
    ${isPlaced ? `
      <div class="tower-actions">
        <button class="primary-action" id="upgradeTowerBtn" type="button">Ulepsz (${nextCost})</button>
        <button class="secondary-action" id="sellTowerBtn" type="button">Sprzedaj (+${sell})</button>
      </div>
      <p class="hint-text">${item.upgradeText}</p>
    ` : `<p class="hint-text">Koszt budowy: ${item.cost} Network Energy. Kliknij wolne pole budowy na mapie.</p>`}
  `;
  if (isPlaced) {
    document.getElementById("upgradeTowerBtn").addEventListener("click", () => upgradeSelectedTower());
    document.getElementById("sellTowerBtn").addEventListener("click", () => sellSelectedTower());
  }
}

function renderStatus() {
  const layer = layers[currentWorld()];
  el.worldNumber.textContent = String(state.worldIndex + 1);
  el.waveNumber.textContent = String(state.wave);
  el.energyAmount.textContent = String(state.energy);
  el.baseHealth.textContent = String(state.health);
  el.worldLabel.textContent = layer.polish;
  el.worldTitle.textContent = layer.english;
  el.worldDescription.textContent = layer.description;
  el.bossBadge.textContent = state.unlockedLayers.length === 4 ? "Boss dostępny" : "Boss zamknięty";
  el.mapDescription.textContent = currentMap().description;
}

function renderMapPicker() {
  el.mapSelect.innerHTML = maps
    .map((map, index) => `<option value="${index}">${map.name}</option>`)
    .join("");
  el.mapSelect.value = String(state.currentMapIndex);
  el.mapSelect.disabled = true;
}

function attackSpeed(tower) {
  return Math.round(100 / tower.rate * 10) / 10;
}

function attackLabel(kind) {
  const labels = {
    scan: "skan/odkrycie",
    impact: "uderzenie",
    frost: "mróz/spowolnienie",
    boost: "wsparcie",
    pierce: "przebicie",
    stun: "diagnostyczny impuls",
    fire: "ogień/obrażenia w czasie",
    reliable: "precyzyjne ACK",
    rapid: "szybki ostrzał",
    chain: "łańcuch nazw",
    shield: "tarcza bezpieczeństwa",
  };
  return labels[kind] || "standard";
}

function addLog(message, tone = "info") {
  const item = document.createElement("div");
  item.className = "log-item";
  item.style.borderLeftColor = tone === "warn" ? "#ea5b5b" : tone === "win" ? "#2fb06d" : "#20a7b8";
  item.textContent = message;
  el.logFeed.prepend(item);
  while (el.logFeed.children.length > 7) el.logFeed.lastElementChild.remove();
}

function renderGlossary(filter = "") {
  const term = filter.trim().toLowerCase();
  const all = [...towers, ...concepts];
  el.glossaryGrid.innerHTML = "";
  all
    .filter((item) => {
      const blob = `${item.name} ${item.icon} ${item.english} ${item.polish} ${item.port} ${item.description} ${layers[item.layer].polish}`.toLowerCase();
      return blob.includes(term);
    })
    .forEach((item) => {
      const card = document.createElement("article");
      card.className = "glossary-card";
      card.innerHTML = `
        <header>
          <span class="card-icon" style="background:${layerColor(item.layer)}">${item.icon}</span>
          <div>
            <h2>${item.name}</h2>
            <p>${layers[item.layer].polish}</p>
          </div>
        </header>
        <p><strong>${item.english}</strong> → ${item.polish}</p>
        <p>${item.description}</p>
        ${item.detail ? `<p>${item.detail}</p>` : ""}
        <p><strong>Rola:</strong> ${item.ability}</p>
        <div class="tag-row">
          <span class="tag">${item.port}</span>
          <span class="tag">${layers[item.layer].english}</span>
          ${item.attackKind ? `<span class="tag">${attackLabel(item.attackKind)}</span>` : ""}
        </div>
      `;
      el.glossaryGrid.appendChild(card);
    });
}

function renderPorts() {
  el.portsTable.innerHTML = portList
    .map(([name, port, role]) => `
      <div class="port-row">
        <strong>${name}</strong>
        <span>${port}</span>
        <span>${role}</span>
      </div>
    `)
    .join("");
}

function renderLessons() {
  el.trainingXp.textContent = String(trainingState.xp);
  el.trainingHearts.textContent = String(trainingState.hearts);
  el.trainingStreak.textContent = String(trainingState.streak);
  el.lessonList.innerHTML = "";
  lessons.forEach((lesson, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lesson-button";
    if (trainingState.lessonIndex === index) button.classList.add("is-active");
    button.innerHTML = `
      <span class="lesson-node" style="background:${lesson.color}">${index + 1}</span>
      <span>
        <strong>${lesson.title}</strong>
        <small>${lesson.questions.length} zadań</small>
      </span>
      <span class="tag">${trainingState.completed.has(index) ? "OK" : "Start"}</span>
    `;
    button.addEventListener("click", () => startLesson(index));
    el.lessonList.appendChild(button);
  });
}

function startLesson(index) {
  trainingState.lessonIndex = index;
  trainingState.questionIndex = 0;
  trainingState.hearts = Math.max(1, trainingState.hearts);
  trainingState.streak = 0;
  renderLessons();
  renderLessonQuestion();
  showView("training");
}

function renderLessonQuestion() {
  const lesson = lessons[trainingState.lessonIndex];
  const question = lesson.questions[trainingState.questionIndex % lesson.questions.length];
  el.lessonLabel.textContent = `Lekcja ${trainingState.lessonIndex + 1} · ${question.label}`;
  el.lessonTitle.textContent = lesson.title;
  el.lessonPrompt.textContent = question.title;
  el.lessonFeedback.textContent = "";
  el.lessonAnswers.innerHTML = "";
  shuffle(question.answers).forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = answer;
    button.addEventListener("click", () => answerLesson(button, answer === question.correct, question));
    el.lessonAnswers.appendChild(button);
  });
}

function answerLesson(button, correct, question) {

  function showTrainingSummary(won = false) {
    const message = won ? "TEST ZAKOŃCZONY ✅" : "PRZEGRANA ❌";

      alert(
        `${message}
        XP: ${trainingState.xp}
        Serca: ${trainingState.hearts}
        Seria: ${trainingState.streak}`
      );

      trainingState.xp = 0;
      trainingState.hearts = 5;
      trainingState.streak = 0;
      trainingState.questionIndex = 0;
      trainingState.lessonIndex = 0; 
  }

  [...el.lessonAnswers.children].forEach((child) => {
    child.disabled = true;
    if (child.textContent === question.correct) child.classList.add("correct");
  });
  if (correct) {
    button.classList.add("correct");
    trainingState.xp += 10 + trainingState.streak * 2;
    trainingState.streak += 1;
    el.lessonFeedback.textContent = `Dobrze. +XP. ${question.explain}`;
  } else {
    button.classList.add("wrong");
    trainingState.hearts = Math.max(0, trainingState.hearts - 1);
    trainingState.streak = 0;
    el.lessonFeedback.textContent = `Nie tym razem. ${question.explain}`;
  }
  renderLessons();
  setTimeout(() => {

  const lesson = lessons[trainingState.lessonIndex];

  if (trainingState.hearts <= 0) {
    showTrainingSummary(false);

    renderLessons();
    renderLessonQuestion();
    return;
  }

  trainingState.questionIndex += 1;

  if (trainingState.questionIndex >= lesson.questions.length) {

    trainingState.questionIndex = 0;

    const nextLesson = trainingState.lessonIndex + 1;

    if (nextLesson < lessons.length) {
      trainingState.lessonIndex = nextLesson;

      renderLessons();
      renderLessonQuestion();
      return;
    }

    showTrainingSummary(true);

    renderLessons();
    renderLessonQuestion();
    return;
  }

    renderLessonQuestion();

  }, 1200);
    
}

function canvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  const client = event.touches ? event.touches[0] : event;
  return {
    x: ((client.clientX - rect.left) / rect.width) * canvas.width,
    y: ((client.clientY - rect.top) / rect.height) * canvas.height,
  };
}

function placeTower(point) {
  const existing = state.placed.find((tower) => distance(tower, point) < 34);
  if (existing) {
    selectPlacedTower(existing);
    return;
  }
  if (!state.selectedTower) {
    addLog("Najpierw wybierz protokół z panelu wież.", "warn");
    return;
  }
  const tower = towers.find((item) => item.id === state.selectedTower);
  const slot = buildSlots().find((candidate) => {
    const used = state.placed.some((placed) => placed.slot === candidate);
    return !used && distance(candidate, point) < 38;
  });
  if (!slot) {
    addLog("Kliknij wolne zielone pole budowy.", "warn");
    return;
  }
  if (state.energy < tower.cost) {
    addLog(`Za mało Network Energy na ${tower.name}.`, "warn");
    return;
  }
  state.energy -= tower.cost;
  const placedTower = {
    ...tower,
    x: slot.x,
    y: slot.y,
    slot,
    cooldown: 0,
    level: 1,
    spent: tower.cost,
    instanceId: globalThis.crypto?.randomUUID ? crypto.randomUUID() : `${tower.id}-${Date.now()}-${Math.random()}`,
  };
  state.placed.push(placedTower);
  state.selectedPlacedTowerId = placedTower.instanceId;
  renderSelectedInfo(placedTower);
  addLog(`${tower.name} gotowy. ${tower.ability}`, "win");
  renderStatus();
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function selectPlacedTower(tower) {
  state.selectedPlacedTowerId = tower.instanceId;
  state.selectedTower = null;
  renderTowerList();
  renderSelectedInfo(tower);
  addLog(`${tower.name}: ${tower.detail}`);
}

function selectedPlacedTower() {
  return state.placed.find((tower) => tower.instanceId === state.selectedPlacedTowerId);
}

function upgradeCost(tower) {
  return Math.round(tower.upgradeBase * tower.level * 1.35);
}

function sellValue(tower) {
  return Math.round(tower.spent * tower.sellRatio);
}

function upgradeSelectedTower() {
  const tower = selectedPlacedTower();
  if (!tower) return;
  if (tower.level >= 4) {
    addLog(`${tower.name} ma już maksymalny poziom.`, "warn");
    return;
  }
  const cost = upgradeCost(tower);
  if (state.energy < cost) {
    addLog(`Za mało energii na ulepszenie. Potrzeba ${cost}.`, "warn");
    return;
  }
  state.energy -= cost;
  tower.spent += cost;
  tower.level += 1;
  tower.damage = Math.round(tower.damage * 1.28);
  tower.range = Math.round(tower.range * 1.08);
  tower.rate = Math.max(14, Math.round(tower.rate * 0.88));
  addLog(`${tower.name} ulepszony do poziomu ${tower.level}. ${tower.upgradeText}`, "win");
  renderSelectedInfo(tower);
  renderStatus();
}

function sellSelectedTower() {
  const tower = selectedPlacedTower();
  if (!tower) return;
  const value = sellValue(tower);
  state.energy += value;
  state.placed = state.placed.filter((item) => item.instanceId !== tower.instanceId);
  state.selectedPlacedTowerId = null;
  addLog(`${tower.name} sprzedany. Odzyskano ${value} energii.`);
  renderSelectedInfo({ name: "Wybierz protokół", english: "Kliknij wieżę", polish: "albo postaw nową", port: "-", description: "Sprzedaż zwraca część energii, a ulepszenia zwiększają obrażenia, zasięg i szybkość.", ability: "Zarządzanie obroną." });
  renderStatus();
}

function changeMap(index) {
  if (state.runningWave) {
    el.mapSelect.value = String(state.currentMapIndex);
    addLog("Nie zmieniaj mapy w trakcie fali. Sieć ma już pełne ręce roboty.", "warn");
    return;
  }
  state.currentMapIndex = index;
  state.placed = [];
  state.enemies = [];
  state.projectiles = [];
  state.particles = [];
  state.selectedPlacedTowerId = null;
  state.selectedTower = null;
  addLog(`Mapa zmieniona na ${currentMap().name}. Wieże zostały wyczyszczone, żeby trasa była uczciwa.`);
  renderTowerList();
  renderStatus();
}

function startWave() {
  if (state.runningWave || state.quizOpen) return;
  if (state.health <= 0) resetGame();
  if (state.placed.length === 0) {
    addLog("Postaw przynajmniej jedną wieżę przed falą.", "warn");
    return;
  }
  const isBoss = state.wave > 12 && state.unlockedLayers.length === 4;
  state.runningWave = true;
  state.enemiesToSpawn = isBoss ? 1 : 5 + state.wave * 2;
  state.spawnTimer = 0;
  addLog(isBoss ? "The Great Network Failure nadchodzi!" : `Fala ${state.wave}: pakiety problemów w drodze.`);
}

function spawnEnemy() {
  const isBoss = state.wave > 12 && state.unlockedLayers.length === 4;
  const base = isBoss
    ? { name: "The Great Network Failure", hp: 680, speed: 0.42, type: "boss", color: "#172126" }
    : enemiesCatalog[(state.wave + state.enemiesToSpawn + state.worldIndex) % enemiesCatalog.length];
  const hpScale = 1 + state.wave * 0.14;
  state.enemies.push({
    ...base,
    x: activePath()[0].x,
    y: activePath()[0].y,
    hp: Math.round(base.hp * hpScale),
    maxHp: Math.round(base.hp * hpScale),
    speed: base.speed + state.wave * 0.018,
    waypoint: 1,
    slow: 0,
    stun: 0,
    burn: 0,
    burnPower: 0,
    shieldCracked: 0,
    boss: isBoss,
  });
}

function updateGame(delta) {
  if (state.runningWave) {
    state.spawnTimer -= delta;
    if (state.enemiesToSpawn > 0 && state.spawnTimer <= 0) {
      spawnEnemy();
      state.enemiesToSpawn -= 1;
      state.spawnTimer = state.wave > 12 ? 9999 : 58;
    }
    if (state.enemiesToSpawn <= 0 && state.enemies.length === 0) {
      finishWave();
    }
  }

  state.enemies.forEach((enemy) => moveEnemy(enemy, delta));
  state.enemies.forEach((enemy) => applyEnemyStatus(enemy, delta));
  state.placed.forEach((tower) => updateTower(tower, delta));
  updateProjectiles(delta);
  updateParticles(delta);
}

function moveEnemy(enemy, delta) {
  if (enemy.stun > 0) {
    enemy.stun -= delta;
    return;
  }
  const target = activePath()[enemy.waypoint];
  if (!target) {
    state.health -= enemy.boss ? 8 : 1;
    enemy.dead = true;
    addLog(`${enemy.name} dotarł do rdzenia sieci!`, "warn");
    renderStatus();
    if (state.health <= 0) {
      addLog("Rdzeń sieci padł. Reset kampanii przywróci porządek.", "warn");
      state.runningWave = false;
    }
    return;
  }
  const speed = enemy.speed * (enemy.slow > 0 ? 0.46 : 1) * (enemy.shieldCracked > 0 ? 0.86 : 1) * delta;
  enemy.slow -= delta;
  enemy.shieldCracked -= delta;
  const dx = target.x - enemy.x;
  const dy = target.y - enemy.y;
  const dist = Math.hypot(dx, dy);
  if (dist < speed) {
    enemy.x = target.x;
    enemy.y = target.y;
    enemy.waypoint += 1;
  } else {
    enemy.x += (dx / dist) * speed;
    enemy.y += (dy / dist) * speed;
  }
}

function applyEnemyStatus(enemy, delta) {
  if (enemy.burn > 0 && !enemy.dead) {
    enemy.burn -= delta;
    enemy.hp -= enemy.burnPower * delta * 0.045;
    if (Math.random() < 0.07) burst(enemy.x, enemy.y - 12, "#ea5b5b", "FIRE");
    if (enemy.hp <= 0) defeatEnemy(enemy);
  }
}

function updateTower(tower, delta) {
  tower.cooldown -= delta;
  if (tower.cooldown > 0) return;
  const target = state.enemies
    .filter((enemy) => !enemy.dead && distance(tower, enemy) <= tower.range)
    .sort((a, b) => b.waypoint - a.waypoint || a.hp - b.hp)[0];
  if (!target) return;
  const boost = nearbyBoost(tower);
  tower.cooldown = Math.max(12, tower.rate - boost * 5);
  const damage = Math.round(tower.damage * (1 + boost * 0.12));
  state.projectiles.push({
    x: tower.x,
    y: tower.y,
    target,
    damage,
    color: layerColor(tower.layer),
    effect: tower.effect,
    attackKind: tower.attackKind,
    level: tower.level,
    speed: 9,
  });
}

function nearbyBoost(tower) {
  return state.placed.filter((other) => other !== tower && other.effect === "boost" && distance(other, tower) < 130).length;
}

function updateProjectiles(delta) {
  state.projectiles.forEach((shot) => {
    if (shot.target.dead) {
      shot.dead = true;
      return;
    }
    const dist = distance(shot, shot.target);
    const step = shot.speed * delta;
    if (dist <= step) {
      hitEnemy(shot.target, shot);
      shot.dead = true;
    } else {
      shot.x += ((shot.target.x - shot.x) / dist) * step;
      shot.y += ((shot.target.y - shot.y) / dist) * step;
    }
  });
  state.projectiles = state.projectiles.filter((shot) => !shot.dead);
  state.enemies = state.enemies.filter((enemy) => !enemy.dead);
}

function hitEnemy(enemy, shot) {
  if (shot.effect === "fast" && Math.random() < Math.max(0.05, 0.16 - shot.level * 0.025)) {
    burst(enemy.x, enemy.y, "#999", "MISS");
    return;
  }
  let damage = typedDamage(enemy, shot);
  enemy.hp -= damage;
  applyShotEffect(enemy, shot);
  burst(enemy.x, enemy.y, shot.color, String(damage));
  if (enemy.hp <= 0) {
    defeatEnemy(enemy);
  }
}

function typedDamage(enemy, shot) {
  let damage = shot.damage;
  if (enemy.weak === shot.attackKind || enemy.weak === shot.effect) damage *= 1.7;
  if (enemy.resist === shot.attackKind || enemy.resist === shot.effect) damage *= 0.65;
  if (shot.effect === "dns" && enemy.name === "DNS Error") damage *= 1.8;
  if (shot.attackKind === "reliable") damage *= 1.12;
  return Math.max(1, Math.round(damage));
}

function applyShotEffect(enemy, shot) {
  const power = 1 + (shot.level || 1) * 0.18;
  if (shot.attackKind === "frost" || shot.effect === "slow") enemy.slow = Math.max(enemy.slow, 70 * power);
  if (shot.attackKind === "stun" || shot.effect === "stun") enemy.stun = Math.max(enemy.stun, 20 * power);
  if (shot.attackKind === "fire") {
    enemy.burn = Math.max(enemy.burn, 92 * power);
    enemy.burnPower = Math.max(enemy.burnPower, shot.damage * 0.28);
  }
  if (shot.attackKind === "shield" || shot.effect === "shield") {
    enemy.shieldCracked = Math.max(enemy.shieldCracked, 90);
    if (state.health < 20 && Math.random() < 0.08) state.health += 1;
  }
  if (shot.attackKind === "chain" || shot.effect === "dns") {
    const next = state.enemies.find((other) => other !== enemy && !other.dead && distance(enemy, other) < 92);
    if (next) {
      next.hp -= Math.round(shot.damage * 0.45);
      burst(next.x, next.y, shot.color, "DNS");
      if (next.hp <= 0) defeatEnemy(next);
    }
  }
  if (shot.attackKind === "scan" || shot.effect === "reveal") enemy.shieldCracked = Math.max(enemy.shieldCracked, 65);
}

function defeatEnemy(enemy) {
  if (enemy.dead) return;
  enemy.dead = true;
  const reward = enemy.boss ? 300 : 12 + Math.round(state.wave * 1.5);
  state.energy += reward;
  state.kills += 1;
  addLog(`${enemy.name} naprawiony. +${reward} Network Energy. Słabość: ${attackLabel(enemy.weak)}.`);
  renderStatus();
}

function burst(x, y, color, text) {
  state.particles.push({ x, y, color, text, life: 46, vy: -0.45 });
}

function updateParticles(delta) {
  state.particles.forEach((particle) => {
    particle.life -= delta;
    particle.y += particle.vy * delta;
  });
  state.particles = state.particles.filter((particle) => particle.life > 0);
}

function finishWave() {
  state.runningWave = false;
  if (state.wave > 12 && state.unlockedLayers.length === 4) {
    state.campaignWon = true;
    showSummary();
    return;
  }
  addLog(`Fala ${state.wave} zakończona. Czas na mini-quiz.`, "win");
  openQuiz();
}

function advanceProgress() {
  state.wave += 1;
  if (state.wave === 4 && !state.unlockedLayers.includes("internet")) unlockLayer("internet");
  if (state.wave === 7 && !state.unlockedLayers.includes("transport")) unlockLayer("transport");
  if (state.wave === 10 && !state.unlockedLayers.includes("application")) unlockLayer("application");
  if (state.wave === 13 && state.unlockedLayers.length === 4) addLog("Wszystkie warstwy odblokowane. Boss czeka po następnej fali.", "warn");
  autoChangeMap();
  renderStatus();
}

function autoChangeMap() {
  if (state.runningWave) return;
  const nextMapIndex = (state.wave - 1) % maps.length;
  if (nextMapIndex === state.currentMapIndex) return;
  const refund = state.placed.reduce((sum, tower) => sum + sellValue(tower), 0);
  state.energy += refund;
  state.currentMapIndex = nextMapIndex;
  state.placed = [];
  state.enemies = [];
  state.projectiles = [];
  state.particles = [];
  state.selectedPlacedTowerId = null;
  state.selectedTower = null;
  renderMapPicker();
  renderTowerList();
  renderSelectedInfo({
    name: "Nowa mapa poziomu",
    english: currentMap().name,
    polish: "Mapa zmienia się automatycznie",
    port: "-",
    description: currentMap().description,
    ability: `Wieże z poprzedniej mapy zwróciły ${refund} energii. Rozstaw obronę od nowa.`,
  });
  addLog(`Poziom ${state.wave}: mapa automatycznie zmieniona na ${currentMap().name}. Zwrot energii: ${refund}.`, "win");
}

function unlockLayer(layerKey) {
  state.unlockedLayers.push(layerKey);
  state.worldIndex = worldOrder.indexOf(layerKey);
  renderTowerList();
  addLog(`Odblokowano: ${layers[layerKey].polish}. Nowe protokoły dostępne!`, "win");
}

function makeQuiz(forcePorts = false) {

  if (forcePorts) {
  const portData = [
    ["DNS", "53 TCP/UDP", "Tłumaczenie nazw domen na adresy IP"],
    ["DHCPv4", "67 i 68 UDP", "Automatyczna konfiguracja IPv4"],
    ["DHCPv6", "546 i 547 UDP", "Automatyczna konfiguracja IPv6"],
    ["SMTP", "25 TCP", "Wysyłanie poczty"],
    ["POP3", "110 TCP", "Odbieranie poczty na urządzenie"],
    ["IMAP", "143 TCP", "Synchronizacja poczty"],
    ["FTP", "20 i 21 TCP", "Transfer plików"],
    ["SFTP", "22 TCP", "Szyfrowany transfer plików przez SSH"],
    ["TFTP", "69 UDP", "Prosty transfer konfiguracji"],
    ["HTTP", "80 TCP", "Strony internetowe"],
    ["HTTPS", "443 TCP", "Szyfrowane strony internetowe"],
    ["BGP", "179 TCP", "Routing między systemami autonomicznymi"]
  ];

  const types = ["protocolToPort", "portToProtocol", "scenario"];
  const type = types[Math.floor(Math.random() * types.length)];

  const chosen = portData[Math.floor(Math.random() * portData.length)];

  // ✅ протокол → порт
  if (type === "protocolToPort") {
    return {
      label: "Porty",
      title: `Który port jest używany przez ${chosen[0]}?`,
      correct: chosen[1],
      answers: shuffle([
        chosen[1],
        ...portData
          .filter(p => p[0] !== chosen[0])
          .map(p => p[1])
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
      ]),
      explain: `${chosen[0]} → ${chosen[1]}. ${chosen[2]}`
    };
  }

  // ✅ порт → протокол
  if (type === "portToProtocol") {
    return {
      label: "Porty",
      title: `Który protokół używa portu ${chosen[1]}?`,
      correct: chosen[0],
      answers: shuffle([
        chosen[0],
        ...portData
          .filter(p => p[0] !== chosen[0])
          .map(p => p[0])
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
      ]),
      explain: `${chosen[0]} → ${chosen[1]}. ${chosen[2]}`
    };
  }

  // ✅ сценарий (самый полезный)
  return {
    label: "Porty",
    title: `Masz problem: ${chosen[2]}. Jaki port odpowiada za tę usługę?`,
    correct: chosen[1],
    answers: shuffle([
      chosen[1],
      ...portData
        .filter(p => p[0] !== chosen[0])
        .map(p => p[1])
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
    ]),
    explain: `${chosen[0]} działa na ${chosen[1]}.`
  };
}

  const fresh = tcpIpQuestions.filter(
    (question) => !state.askedQuizTitles.includes(question.title)
  );

  if (fresh.length === 0) {
    state.askedQuizTitles = [];
  }

  const pool = fresh.length ? fresh : tcpIpQuestions;
  const chosen = pool[Math.floor(Math.random() * pool.length)];

  state.askedQuizTitles.push(chosen.title);

  return {
    ...chosen,
    answers: shuffle(chosen.answers)
  };
}


function makeOptions(correct, choices) {
  const distractors = shuffle(choices.filter((choice) => choice !== correct).filter(unique)).slice(0, 3);
  return shuffle([correct, ...distractors]);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function unique(value, index, array) {
  return array.indexOf(value) === index;
}

function openQuiz(forcePorts = false, advances = true) {
  state.quizOpen = true;
  state.quizAdvances = advances;
  const quiz = makeQuiz(forcePorts);
  el.quizType.textContent = quiz.label;
  el.quizTitle.textContent = quiz.title;
  el.quizFeedback.textContent = "";
  el.answers.innerHTML = "";
  quiz.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = answer;
    button.addEventListener("click", () => answerQuiz(button, answer === quiz.correct, quiz.correct, quiz.explain));
    el.answers.appendChild(button);
  });
  el.quizModal.hidden = false;
}

function answerQuiz(button, correct, correctAnswer, explain = "") {
  [...el.answers.children].forEach((child) => {
    child.disabled = true;
    if (child.textContent === correctAnswer) child.classList.add("correct");
  });
  if (correct) {
    button.classList.add("correct");
    state.energy += 35;
    el.quizFeedback.textContent = `Dobrze! +35 Network Energy. ${explain}`;
  } else {
    button.classList.add("wrong");
    state.health = Math.max(0, state.health - 1);
    el.quizFeedback.textContent = `Źle: -1 życie. Prawidłowa odpowiedź: ${correctAnswer}. ${explain}`;
    addLog(`Błędna odpowiedź w quizie. Rdzeń traci 1 życie. Zostało: ${state.health}.`, "warn");
  }
  renderStatus();
  setTimeout(() => {
    el.quizModal.hidden = true;
    state.quizOpen = false;
    if (state.quizAdvances) advanceProgress();
  }, 1300);
}

function showSummary() {
  el.summaryContent.innerHTML = `
    <p>Model TCP/IP składa się z 4 warstw. Każda warstwa realizuje określone zadania i współpracuje z pozostałymi podczas przesyłania danych przez sieć.</p>
    <ol class="layer-order">
      <li><strong>Warstwa aplikacji</strong> (${layers.application.english})<span>Główne zadanie: ${layers.application.task}. Przykłady: ${layers.application.examples}.</span></li>
      <li><strong>Warstwa transportowa</strong> (${layers.transport.english})<span>Główne zadanie: ${layers.transport.task}. Przykłady: ${layers.transport.examples}. TCP jest niezawodny, UDP jest szybszy i bez potwierdzeń.</span></li>
      <li><strong>Warstwa internetu</strong> (${layers.internet.english})<span>Główne zadanie: ${layers.internet.task}. Przykłady: ${layers.internet.examples}. Tu dzieją się IPv4, IPv6 i routing.</span></li>
      <li><strong>Warstwa dostępu do sieci</strong> (${layers.access.english})<span>Główne zadanie: ${layers.access.task}. Przykłady: ${layers.access.examples}. Tu pracują MAC Address, Frame, Switch i NIC.</span></li>
    </ol>
    <p><strong>Kolejność:</strong> Application Layer → Transport Layer → Internet Layer → Network Access Layer.</p>
    <p><strong>Po polsku:</strong> Warstwa aplikacji → Warstwa transportowa → Warstwa internetu → Warstwa dostępu do sieci.</p>
  `;
  el.summaryModal.hidden = false;
}

function resetGame() {
  Object.assign(state, {
    worldIndex: 0,
    wave: 1,
    energy: 120,
    health: 20,
    selectedTower: null,
    selectedPlacedTowerId: null,
    placed: [],
    enemies: [],
    projectiles: [],
    particles: [],
    runningWave: false,
    spawnTimer: 0,
    enemiesToSpawn: 0,
    kills: 0,
    unlockedLayers: ["access"],
    quizOpen: false,
    quizAdvances: true,
    askedQuizTitles: [],
    campaignWon: false,
  });
  el.logFeed.innerHTML = "";
  addLog("Nowa kampania gotowa. Sieć czeka na obronę.");
  renderMapPicker();
  renderTowerList();
  renderStatus();
  renderSelectedInfo({ name: "Wybierz protokół", english: "Kliknij wieżę", polish: "Potem kliknij pole budowy", port: "-", description: "Tooltipy i słownik pokazują teorię dla każdej jednostki.", ability: "Nauka przez rozgrywkę." });
}

function draw() {
  const layer = layers[currentWorld()];
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, layer.bg[0]);
  gradient.addColorStop(1, layer.bg[1]);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawGrid();
  drawDecorations();
  drawPath();
  drawSlots();
  state.placed.forEach(drawTower);
  state.enemies.forEach(drawEnemy);
  state.projectiles.forEach(drawProjectile);
  state.particles.forEach(drawParticle);
  drawBase();
}

function drawGrid() {
  ctx.strokeStyle = "rgba(23, 33, 38, 0.07)";
  ctx.lineWidth = 1;
  for (let x = 0; x <= canvas.width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y <= canvas.height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

function drawDecorations() {
  const layer = layers[currentWorld()];
  ctx.save();
  ctx.globalAlpha = 0.55;
  ctx.fillStyle = "#ffffff";
  [
    { x: 84, y: 72, w: 120, h: 42 },
    { x: 790, y: 78, w: 150, h: 48 },
    { x: 96, y: 566, w: 160, h: 40 },
  ].forEach((cloud) => roundRect(cloud.x, cloud.y, cloud.w, cloud.h, 20, true, false));
  ctx.globalAlpha = 1;

  const devices = [
    { x: 64, y: 80, label: "PC" },
    { x: 890, y: 90, label: "DNS" },
    { x: 150, y: 575, label: "LAN" },
    { x: 928, y: 555, label: "WEB" },
  ];
  devices.forEach((device) => {
    ctx.fillStyle = layer.color;
    roundRect(device.x - 24, device.y - 18, 48, 36, 8, true, false);
    ctx.fillStyle = "#fff";
    ctx.font = "900 11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(device.label, device.x, device.y + 4);
  });
  ctx.strokeStyle = "rgba(23, 33, 38, 0.14)";
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 9]);
  ctx.beginPath();
  ctx.moveTo(64, 98);
  ctx.bezierCurveTo(260, 60, 500, 100, 890, 108);
  ctx.moveTo(150, 575);
  ctx.bezierCurveTo(360, 604, 620, 590, 928, 555);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();
}

function drawPath() {
  ctx.lineWidth = 54;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgba(255, 255, 255, 0.88)";
  ctx.beginPath();
  activePath().forEach((point, index) => (index ? ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y)));
  ctx.stroke();
  ctx.lineWidth = 4;
  ctx.setLineDash([14, 14]);
  ctx.strokeStyle = "rgba(23, 33, 38, 0.18)";
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawSlots() {
  buildSlots().forEach((slot) => {
    const used = state.placed.some((tower) => tower.slot === slot);
    ctx.fillStyle = used ? "rgba(23,33,38,0.12)" : "rgba(47,176,109,0.22)";
    ctx.strokeStyle = used ? "rgba(23,33,38,0.28)" : "rgba(47,176,109,0.76)";
    ctx.lineWidth = 2;
    roundRect(slot.x - 30, slot.y - 30, 60, 60, 8, true, true);
    if (!used) {
      ctx.fillStyle = "rgba(23,33,38,0.44)";
      ctx.font = "700 13px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("+", slot.x, slot.y + 5);
    }
  });
}

function drawTower(tower) {
  ctx.save();
  ctx.globalAlpha = 0.12;
  ctx.fillStyle = layerColor(tower.layer);
  ctx.beginPath();
  ctx.arc(tower.x, tower.y, tower.range, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = layerColor(tower.layer);
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 4;
  roundRect(tower.x - 27, tower.y - 27, 54, 54, 8, true, true);
  ctx.fillStyle = "rgba(255,255,255,0.34)";
  roundRect(tower.x - 8, tower.y - 42, 16, 22, 5, true, false);
  ctx.fillStyle = "#172126";
  ctx.globalAlpha = 0.18;
  ctx.beginPath();
  ctx.arc(tower.x + 16, tower.y - 14, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#fff";
  ctx.font = "900 13px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(tower.icon, tower.x, tower.y + 5);
  ctx.fillStyle = "#172126";
  ctx.font = "900 10px sans-serif";
  ctx.fillText(`L${tower.level}`, tower.x, tower.y + 22);
  if (state.selectedPlacedTowerId === tower.instanceId) {
    ctx.strokeStyle = "#172126";
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(tower.x - 35, tower.y - 35, 70, 70);
    ctx.setLineDash([]);
  }
  ctx.restore();
}

function drawEnemy(enemy) {
  ctx.save();
  const radius = enemy.boss ? 31 : 19;
  drawEnemyBody(enemy, radius);
  ctx.fillStyle = "#172126";
  ctx.fillRect(enemy.x - 24, enemy.y - radius - 15, 48, 6);
  ctx.fillStyle = "#2fb06d";
  ctx.fillRect(enemy.x - 24, enemy.y - radius - 15, 48 * Math.max(0, enemy.hp / enemy.maxHp), 6);
  ctx.fillStyle = "#fff";
  ctx.font = enemy.boss ? "900 11px sans-serif" : "900 8px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(enemy.boss ? "BOSS" : enemy.icon, enemy.x, enemy.y + 4);
  ctx.fillStyle = "#172126";
  ctx.beginPath();
  ctx.arc(enemy.x - 7, enemy.y - 5, 2, 0, Math.PI * 2);
  ctx.arc(enemy.x + 7, enemy.y - 5, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#172126";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(enemy.x - 7, enemy.y + 10);
  ctx.lineTo(enemy.x + 7, enemy.y + 10);
  ctx.stroke();
  if (enemy.slow > 0) {
    ctx.strokeStyle = "#78d9ff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, radius + 6, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (enemy.burn > 0) {
    ctx.fillStyle = "#ff7a2f";
    ctx.beginPath();
    ctx.moveTo(enemy.x, enemy.y - radius - 7);
    ctx.lineTo(enemy.x - 6, enemy.y - radius + 7);
    ctx.lineTo(enemy.x + 6, enemy.y - radius + 7);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function drawEnemyBody(enemy, radius) {
  ctx.fillStyle = enemy.color;
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 3;
  ctx.beginPath();
  if (enemy.boss) {
    roundRect(enemy.x - 34, enemy.y - 30, 68, 60, 8, true, true);
    return;
  }
  if (enemy.shape === "diamond") {
    ctx.moveTo(enemy.x, enemy.y - radius - 4);
    ctx.lineTo(enemy.x + radius + 4, enemy.y);
    ctx.lineTo(enemy.x, enemy.y + radius + 4);
    ctx.lineTo(enemy.x - radius - 4, enemy.y);
    ctx.closePath();
  } else if (enemy.shape === "hex") {
    for (let i = 0; i < 6; i += 1) {
      const angle = Math.PI / 6 + i * Math.PI / 3;
      const x = enemy.x + Math.cos(angle) * (radius + 4);
      const y = enemy.y + Math.sin(angle) * (radius + 4);
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    }
    ctx.closePath();
  } else if (enemy.shape === "sign") {
    roundRect(enemy.x - 24, enemy.y - 18, 48, 36, 6, true, true);
    ctx.moveTo(enemy.x, enemy.y + 18);
    ctx.lineTo(enemy.x, enemy.y + 30);
  } else if (enemy.shape === "clock") {
    ctx.arc(enemy.x, enemy.y, radius + 4, 0, Math.PI * 2);
    ctx.moveTo(enemy.x, enemy.y);
    ctx.lineTo(enemy.x, enemy.y - 12);
    ctx.moveTo(enemy.x, enemy.y);
    ctx.lineTo(enemy.x + 10, enemy.y + 7);
  } else if (enemy.shape === "loop") {
    ctx.arc(enemy.x - 8, enemy.y, radius - 4, 0, Math.PI * 2);
    ctx.moveTo(enemy.x + 8 + radius - 4, enemy.y);
    ctx.arc(enemy.x + 8, enemy.y, radius - 4, 0, Math.PI * 2);
  } else if (enemy.shape === "plug") {
    roundRect(enemy.x - 20, enemy.y - 18, 40, 36, 8, true, true);
    ctx.moveTo(enemy.x - 8, enemy.y - 24);
    ctx.lineTo(enemy.x - 8, enemy.y - 14);
    ctx.moveTo(enemy.x + 8, enemy.y - 24);
    ctx.lineTo(enemy.x + 8, enemy.y - 14);
  } else if (enemy.shape === "jagged") {
    ctx.moveTo(enemy.x - 24, enemy.y - 18);
    ctx.lineTo(enemy.x - 5, enemy.y - 24);
    ctx.lineTo(enemy.x + 6, enemy.y - 12);
    ctx.lineTo(enemy.x + 24, enemy.y - 18);
    ctx.lineTo(enemy.x + 18, enemy.y + 20);
    ctx.lineTo(enemy.x - 18, enemy.y + 20);
    ctx.closePath();
  } else if (enemy.shape === "key") {
    ctx.arc(enemy.x - 8, enemy.y, radius - 3, 0, Math.PI * 2);
    ctx.moveTo(enemy.x + 7, enemy.y);
    ctx.lineTo(enemy.x + 28, enemy.y);
    ctx.lineTo(enemy.x + 28, enemy.y + 8);
  } else if (enemy.shape === "drop") {
    ctx.moveTo(enemy.x, enemy.y - 26);
    ctx.bezierCurveTo(enemy.x + 24, enemy.y - 2, enemy.x + 18, enemy.y + 24, enemy.x, enemy.y + 24);
    ctx.bezierCurveTo(enemy.x - 18, enemy.y + 24, enemy.x - 24, enemy.y - 2, enemy.x, enemy.y - 26);
  } else {
    roundRect(enemy.x - 24, enemy.y - 20, 48, 40, 8, true, true);
  }
  ctx.fill();
  ctx.stroke();
}

function drawProjectile(shot) {
  ctx.save();
  ctx.fillStyle = shot.color;
  ctx.strokeStyle = shot.color;
  ctx.lineWidth = 3;
  if (shot.attackKind === "frost") {
    ctx.fillStyle = "#78d9ff";
    ctx.fillRect(shot.x - 6, shot.y - 6, 12, 12);
  } else if (shot.attackKind === "fire") {
    ctx.fillStyle = "#ff7a2f";
    ctx.beginPath();
    ctx.moveTo(shot.x, shot.y - 9);
    ctx.lineTo(shot.x - 7, shot.y + 7);
    ctx.lineTo(shot.x + 7, shot.y + 7);
    ctx.closePath();
    ctx.fill();
  } else if (shot.attackKind === "stun") {
    ctx.beginPath();
    ctx.moveTo(shot.x - 7, shot.y + 7);
    ctx.lineTo(shot.x, shot.y - 8);
    ctx.lineTo(shot.x + 7, shot.y + 7);
    ctx.stroke();
  } else if (shot.attackKind === "shield") {
    ctx.strokeStyle = "#20a7b8";
    ctx.beginPath();
    ctx.arc(shot.x, shot.y, 8, 0, Math.PI * 2);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.arc(shot.x, shot.y, 6, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawParticle(particle) {
  ctx.globalAlpha = Math.max(0, particle.life / 46);
  ctx.fillStyle = particle.color;
  ctx.font = "900 15px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(particle.text, particle.x, particle.y);
  ctx.globalAlpha = 1;
}

function drawBase() {
  ctx.fillStyle = "#172126";
  const core = currentMap().core;
  roundRect(core.x, core.y, core.width, core.height, 8, true, false);
  ctx.fillStyle = "#fff";
  ctx.font = "900 12px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("CORE", core.x + core.width / 2, core.y + core.height / 2 + 4);
}

function roundRect(x, y, width, height, radius, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

function loop(now) {
  const delta = Math.min(3, (now - lastFrame) / 16.67);
  lastFrame = now;
  updateGame(delta);
  draw();
  requestAnimationFrame(loop);
}

document.getElementById("homeBtn").addEventListener("click", () => showView("intro"));
document.getElementById("startGameBtn").addEventListener("click", () => showView("game"));
document.getElementById("openGlossaryBtn").addEventListener("click", () => showView("glossary"));
document.getElementById("startWaveBtn").addEventListener("click", startWave);
document.getElementById("mobileWaveBtn").addEventListener("click", startWave);
document.getElementById("mobileQuizBtn").addEventListener("click", () => openQuiz(false, false));
document.getElementById("resetGameBtn").addEventListener("click", resetGame);
document.getElementById("clearSelectionBtn").addEventListener("click", () => {
  state.selectedTower = null;
  state.selectedPlacedTowerId = null;
  renderTowerList();
});
document.getElementById("practicePortsBtn").addEventListener("click", () => openQuiz(true, false));
document.getElementById("notesTrainingBtn").addEventListener("click", () => startLesson(0));
document.getElementById("closeSummaryBtn").addEventListener("click", () => {
  el.summaryModal.hidden = true;
  resetGame();
});

el.tabs.forEach((tab) => tab.addEventListener("click", () => showView(tab.dataset.view)));
el.layerCards.forEach((card) => card.addEventListener("click", () => renderIntroLayer(card.dataset.layer)));
el.searchInput.addEventListener("input", () => renderGlossary(el.searchInput.value));
el.mapSelect.addEventListener("change", () => changeMap(Number(el.mapSelect.value)));
canvas.addEventListener("click", (event) => placeTower(canvasPoint(event)));
canvas.addEventListener("touchstart", (event) => {
  event.preventDefault();
  placeTower(canvasPoint(event));
}, { passive: false });

renderIntroLayer("access");
renderGlossary();
renderPorts();
renderLessons();
renderLessonQuestion();
renderMapPicker();
resetGame();
requestAnimationFrame(loop);
