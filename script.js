"use strict";

/* ==========================================================================
   1) QUIZ CONFIGURATION — edit this object to make the quiz your own
   --------------------------------------------------------------------------
   Questions follow the CCST Networking review deck: original wording,
   original choice order and letters (A, B, C…), in the same order as the PDF.

   Question types
   ──────────────
   single     One answer. Tapping a choice checks it instantly.
              { type: "single", prompt, choices: [...], answer: "B" }

   multi      "Choose 2" style. Select, then press Check.
              { type: "multi", prompt, choices: [...], answer: ["B", "D"] }

   match      Drag-and-drop style. Pick an option for every item, then Check.
              { type: "match", prompt, options: [...], items: [["item text", "matching option"], ...] }

   truefalse  True/False for each statement, then Check.
              { type: "truefalse", prompt, items: [["statement", true], ...] }

   recall     Open-ended. Think of the answer, reveal it, then grade yourself.
              { type: "recall", prompt, answer: "the answer text" }

   Optional fields on any question
   ───────────────────────────────
   topic        Groups questions on the start screen
   image        File name inside the images/ folder (shown as a tap-to-zoom exhibit)
   exhibit      Monospace text block (command output) if you don't have an image
   notice       Yellow note shown BEFORE answering (e.g. "image missing")
   note         Yellow note shown AFTER answering (e.g. answer-key corrections)
   explanation  Why the answer is right (shown after answering)

   Invalid questions are skipped and listed in the browser console.
   ========================================================================== */
const QUIZ_CONFIG = {
  title: "CCST Networking",
  subtitle: "Every question from your review deck — original wording and A/B/C/D order",

  shuffleChoices: false, // keep false so the letters match the PDF
  defaultOrder: "pdf", // "pdf" or "shuffle"
  lessonLengths: [10, 20, 0], // 0 = every question in the topic
  defaultLessonLength: 10,
  soundOnByDefault: true,
  imageBase: "images/",

  typeLabels: {
    single: "Multiple choice",
    multi: "Choose {n}",
    match: "Match",
    truefalse: "True or false",
    recall: "Recall",
  },

  topicColors: ["#58CC02", "#1CB0F6", "#CE82FF", "#FF9600", "#FF4B4B", "#FFC800", "#2B70C9"],

  phrases: {
    correct: ["Great job!", "Nice!", "Awesome!", "You got it!", "Excellent!", "Spot on!", "Nailed it!", "Correct!"],
    incorrect: ["Not quite!", "Almost!", "Close one!", "Keep going!", "Good try!"],
    reveal: "Here's the answer",
    streak: {
      3: "3 in a row! 🔥",
      5: "5 in a row! Keep it up!",
      10: "10 streak! Unstoppable!",
      15: "15 streak! Legendary!",
    },
    halfway: "Halfway there!",
    lastOne: "Last one — almost there!",
  },

  results: [
    { min: 100, title: "Flawless!", message: "A perfect score. You really know your stuff." },
    { min: 80, title: "Great job!", message: "Strong work — you're close to exam-ready." },
    { min: 60, title: "Keep it up!", message: "Solid progress. Review the misses and go again." },
    { min: 0, title: "Good practice!", message: "Every mistake is a lesson. Try again to lock it in." },
  ],

  questions: [
    /* ═════════════════ STANDARD CONCEPTS ═════════════════ */
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "How is given the IP Address 172.16.199.25 and the subnet mask 255.255.252.0. What is the CIDR notation for this address?",
      choices: ["172.16.100.25/22", "172.16.100.25/21", "172.16.100.25/23", "172.16.100.25/20"],
      answer: "A",
      explanation: "255.255.252.0 → 8 + 8 + 6 = 22 network bits (252 = 11111100), so /22.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "How is the following IP address written when using a CIDR notation?\nIP Address: 192.168.0.16\nSubnet Mask: 255.255.255.240",
      choices: ["192.168.0.16/30", "192.168.0.16/15", "192.168.0.16/28", "192.168.0.16/24"],
      answer: "C",
      explanation: "240 = 11110000, so the mask has 24 + 4 = 28 network bits.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "What is the CIDR prefix notation for a subnet mask of 255.255.0.0?",
      choices: ["/24", "/8", "/16", "32"],
      answer: "C",
      explanation: "Two full octets of 1s = 16 network bits.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "A host is given the IP address 172.16.100.25 and the subnet mask 255.255.252.0.",
      notice: "The slide leaves out the question — it's asking for the CIDR notation.",
      choices: ["172.16.100.25 /23", "172.16.100.25 /20", "172.16.100.25 /21", "172.16.100.25 /22"],
      answer: "D",
      explanation: "255.255.252.0 = /22 (8 + 8 + 6 network bits).",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "Which address is included in the 192.168.200.0/24 network?",
      choices: ["192.168.199.13", "192.168.200.13", "192.168.201.13", "192.168.1.13"],
      answer: "B",
      explanation: "With /24 the first three octets are the network, so the host must start with 192.168.200.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "What is the most compressed valid format of the IPv6 address 2001:0db8:0000:0016:0000:001b:2000:0056?",
      choices: ["2001:db8::16::1b:2:56", "2001:db8::16::1b:2000:56", "2001:db8:16::1b:2:56", "2001:db8:0:16::1b:2000:56"],
      answer: "D",
      explanation: "Drop leading zeros (0db8 → db8) but never trailing zeros (2000 stays). :: can be used only once, so one 0000 group becomes :: and the other becomes 0.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "Which address is included in the 192.168.200.0/24 network?",
      choices: ["192.168.200.13", "192.168.201.13", "192.168.1.13", "192.168.199.13"],
      answer: "A",
      explanation: "Same question, different order — watch the letters! The host must start with 192.168.200.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "Which address is a link-local IPV6 address?",
      choices: ["FDF8:F535:82EF::53", "FE80::261:2EFE:FE10:765", "2001:0db8:85a3:0000:0000:8a2e:0370:7334", "2401:db00:21:70e4:face:0:3:0"],
      answer: "B",
      explanation: "Link-local addresses start with FE80::/10. FD… is unique local, 2001:db8 is documentation, 2401… is global unicast.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "At which OSI layer is the data stream broken up into segments that include source and destination port numbers?",
      choices: ["Network", "Session", "Transport", "Data Link"],
      answer: "C",
      explanation: "Layer 4 (Transport) creates segments and uses port numbers.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "Which information is included in the header of UDP segment?",
      choices: ["Port Numbers", "IP Address", "Sequence Numbers", "Mac Address"],
      answer: "A",
      explanation: "The UDP header holds source port, destination port, length and checksum. Sequence numbers are TCP only.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "During the data encapsulation process which OSI layer adds a header that contains MAC addressing information and a trailer used for error checking.",
      choices: ["Network", "Session", "Transport", "Data Link"],
      answer: "D",
      explanation: "Layer 2 builds the frame: MAC header in front, Frame Check Sequence (FCS) trailer at the end.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "Which protocol allows you to securely upload files to another computer on the internet?",
      choices: ["SFTP", "HTTP", "NTP", "ICMP"],
      answer: "A",
      explanation: "SFTP runs over SSH (port 22), so the transfer is encrypted.",
    },
    {
      topic: "Standard Concepts",
      type: "match",
      prompt: "Move each of the protocol on the left to its their characteristics on the right",
      options: ["SFTP", "TFTP", "DNS", "DHCP", "ICMP"],
      items: [
        ["Enables the use of SSH keys to prevent impostor from connecting to the server.", "SFTP"],
        ["Ensures data integrity and data security for the file transfers using port 22.", "SFTP"],
        ["Enables backup of network and router configuration files using UDP.", "TFTP"],
        ["Transfer small files within a LAN using port 69.", "TFTP"],
        ["Perform a query to translate companypro.net to an IP Address.", "DNS"],
        ["Assign the reserved IP Address 10.10.10.200 to a web server at your company.", "DHCP"],
        ["Perform a ping to ensure that a server is responding to network connections.", "ICMP"],
      ],
      explanation: "SFTP = SSH, port 22. TFTP = UDP 69, no login. DNS = names → IPs. DHCP = hands out (or reserves) IPs. ICMP = ping.",
    },
    {
      topic: "Standard Concepts",
      type: "match",
      prompt: "Move each protocol or device type from the list on the left to the correct OSI layer on the right.",
      options: ["Physical", "Data Link", "Network", "Transport", "Application"],
      items: [
        ["SMTP, FTP", "Application"],
        ["TCP, UDP", "Transport"],
        ["Cable, Hub, NIC", "Physical"],
        ["Switch", "Data Link"],
        ["Router", "Network"],
      ],
      explanation: "Application: SMTP/FTP · Transport: TCP/UDP · Network: router · Data Link: switch · Physical: cables, hubs, NICs.",
    },
    {
      topic: "Standard Concepts",
      type: "match",
      prompt: "Move each protocol from the list on the left to the correct TCP/IP model layer on the right.",
      options: ["Internetwork", "Application", "Transport", "Network"],
      items: [
        ["TCP", "Transport"],
        ["IP", "Internetwork"],
        ["FTP", "Application"],
        ["Ethernet", "Network"],
      ],
      explanation: "In this slide's TCP/IP naming, \"Internetwork\" is the IP layer and \"Network\" is the Network Access (link) layer where Ethernet lives.",
    },
    {
      topic: "Standard Concepts",
      type: "match",
      prompt: "Move each category on the left to its correct definition on the right",
      options: ["LAN", "PAN", "WAN"],
      items: [
        ["Connects devices such as computers, telephones, tables, and printers within a range of about 10 meters.", "PAN"],
        ["Spans a small area such as a room, home, office building or small group of building.", "LAN"],
        ["Spans a large geographical distance and connects smaller networks over leased lines and VPN's or tunnels.", "WAN"],
      ],
      explanation: "PAN ≈ 10 m around a person · LAN = a building or campus · WAN = cities and countries.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "Which command will display all the current operational settings configured on a Cisco router?",
      choices: ["show protocols", "show startup-config", "show version", "show running-config"],
      answer: "D",
      explanation: "running-config = active settings in RAM. startup-config = saved settings for the next boot.",
    },
    {
      topic: "Standard Concepts",
      type: "truefalse",
      prompt: "For each statement about bandwidth and throughput. Select True or False",
      items: [
        ["High levels of network latency decreases network bandwidth.", false],
        ["Low Bandwidth can increase network latency.", true],
        ["You can increase throughput by decreasing network latency.", true],
      ],
      note: "The last statement is cut off on the slide (\"decreasing network .\") — the missing word is latency.",
      explanation: "Bandwidth is fixed capacity, so latency can't lower it. A narrow link causes queuing delay (more latency), and less latency means more data delivered (more throughput).",
    },
    {
      topic: "Standard Concepts",
      type: "match",
      prompt: "Move each cloud computing service model from the list on the left to the correct example on the right.",
      options: ["IAAS", "SAAS", "PAAS"],
      items: [
        ["A company develops application using cloud-based resources and tools.", "PAAS"],
        ["These virtual machines are connected by a virtual network in the cloud", "IAAS"],
        ["User access a web-based graphics design application in the cloud for a monthly fee", "SAAS"],
      ],
      note: "The slide spells IaaS as \"LAAS\" — it's Infrastructure as a Service.",
      explanation: "PaaS = platform to build apps · IaaS = virtual machines/networks · SaaS = finished app you subscribe to.",
    },
    {
      topic: "Standard Concepts",
      type: "match",
      prompt: "Move each cloud service model on the left to its correct description on the right.",
      options: ["IAAS", "SAAS", "PAAS"],
      items: [
        ["Provides the hardware and software needed for developing, running, and managing applications.", "PAAS"],
        ["Provide pay-as-you-go access to resources provided on virtual machines and virtual storage.", "IAAS"],
        ["Provide on-demand access to applications delivered remotely over the internet.", "SAAS"],
      ],
      explanation: "Developing apps → PaaS · virtual machines & storage → IaaS · ready-made apps over the internet → SaaS.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "Which protocol does an IPv6 host use to resolve the MAC address associated with a destination IPv6 address?",
      choices: ["Address Resolution Protocol (ARP)", "Cisco Discovery Protocol (CDP)", "Neighbor Discovery Protocol (NDP)", "Dynamic Host Configuration Protocol (DHCP)"],
      answer: "C",
      explanation: "IPv6 has no ARP. NDP does the job with ICMPv6 Neighbor Solicitation/Advertisement.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "Which protocol is used by IPV6 enabled host to perform automatic stateless address configuration?",
      choices: ["DHCPV6", "ICMPV6", "TFTP", "DNS"],
      answer: "B",
      explanation: "SLAAC uses ICMPv6 Router Solicitation and Router Advertisement messages.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "During the data encapsulation process, which OSI layer adds a header that contains MAC addressing information and a trailer used for error checking?",
      choices: ["Network", "Transport", "Data Link", "Session"],
      answer: "C",
      explanation: "Same question, different order — Data Link is C this time.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "A user initiates a trouble ticket stating that an external web page is not loading. You determine that other resources both internal and external are still reachable.\nWhich command can you use to help locate where the issue is in the network path to the external web page?",
      choices: ["ping -t", "tracert", "ipconfig/all", "nslookup"],
      answer: "B",
      explanation: "tracert lists every hop on the path, showing where traffic stops.",
    },
    {
      topic: "Standard Concepts",
      type: "multi",
      prompt: "Which two statements are true about the IPv4 address of the default gateway configured on a host? (Choose 2.)",
      choices: [
        "The IPv4 address of the default gateway must be the first host address in the subnet.",
        "The same default gateway IPv4 address is configured on each host on the local network.",
        "The default gateway is the Loopback0 interface IPv4 address of the router connected to the same local network as the host.",
        "The default gateway is the IPv4 address of the router interface connected to the same local network as the host.",
        "Hosts learn the default gateway IPv4 address through router advertisement messages.",
      ],
      answer: ["B", "D"],
      explanation: "Every host on the LAN uses the same gateway: the router's interface on that LAN. It doesn't have to be the first address, and router advertisements are IPv6.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "An engineer configured a new VLAN named VLAN2 for the Data Center team. When the team tries to ping addresses outside VLAN2 from a computer in VLAN2, they are unable to reach them.\nWhat should the engineer configure?",
      choices: ["Additional VLAN", "Default route", "Default gateway", "Static route"],
      answer: "C",
      explanation: "Hosts need a default gateway to send traffic to any other network.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "Which information is included in the header of a UDP segment?",
      choices: ["IP addresses", "Sequence numbers", "Port numbers", "MAC addresses"],
      answer: "C",
      explanation: "Same question, different order — Port numbers is C this time.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "What is the purpose of assigning an IP address to the management VLAN interface on a Layer 2 switch?",
      choices: [
        "To enable access to the CLI on the switch through Telnet or SSH",
        "To enable the switch to provide DHCP services to other switches in the network",
        "To enable the switch to act as a default gateway for the attached devices",
        "To enable the switch to resolve URLs for the attached the devices",
      ],
      answer: "A",
      explanation: "A Layer 2 switch doesn't route — its management IP is only for remote administration.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "Which of the following is a characteristic of the Spanning Tree Protocol (STP)?",
      choices: [
        "prevents loops in a network by blocking redundant links.",
        "provides load balancing across multiple paths in a network.",
        "prioritizes network traffic based on Quality of Service (QoS) settings.",
        "allows for rapid convergence by eliminating the need for spanning tree calculations.",
      ],
      answer: "A",
      explanation: "STP puts redundant ports into blocking so frames can't loop forever.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "What protocol is used by OSPF to form neighbor relationships and exchange routing information?",
      choices: ["CP (Control Protocol)", "P (Protocol)", "MP (Multiprotocol)", "Llo (Link-Local Operations)"],
      answer: "D",
      note: "These choices look garbled on the slide. OSPF forms neighbors with Hello packets, and \"Llo\" looks like a cut-off \"Hello\" — so D is the intended answer. On the exam, look for \"Hello\".",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "What information is contained in the MAC address table of a switch?",
      choices: [
        "Dynamically learned Layer2 and Layer3 addresses of devices communicating on active ports on the switch",
        "The MAC addresses of devices communicating on active ports and static MAC addresses configured by the administrator",
        "All active ports on the switch and the host Layer3 addresses that were dynamically learned on each port.",
        "MAC addresses to IP Address mappings learned through ARP requests or manually configured by the administrator",
      ],
      answer: "B",
      explanation: "The MAC table maps MAC → port. Layer 3 / MAC-to-IP mappings belong to the ARP table.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "What is the purpose of a subnet mask?",
      choices: [
        "determine the network portion of an IP address",
        "determine the host portion of an IP address",
        "determine the default gateway for a network",
        "determine the DNS server for a network",
      ],
      answer: "A",
      explanation: "The 1-bits of the mask mark the network portion.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "A user at you company cannot connect to website on the internet. However, they can connect to network resources on the company LAN. You want to use the divide and conquer approach to troubleshoot the issue. What should you do first?",
      choices: [
        "Run the Telnet command from the user's computer",
        "Ping the default gateway from the user's computer",
        "Check the computer's cable connections",
        "Check the computer's network adapter",
      ],
      answer: "B",
      explanation: "Divide and conquer starts in the middle. LAN access already proves the cable and adapter work.",
    },
    {
      topic: "Standard Concepts",
      type: "single",
      prompt: "Your company has 20 Cisco switches throughout its building. You need to view the configuration of each switch from the command line. Which protocol should you use?",
      choices: ["FTP (File Transfer Protocol)", "RDP (Remote Desktop Protocol)", "SMTP (Simple Mail Transfer Protocol)", "SNMP (Simple Network Management Protocol)"],
      answer: "A",
      note: "Likely typo on the slide: on the real exam, choice A is SSH (Secure Shell), not FTP. SSH gives you a secure command line on each switch. Remember the answer as SSH.",
    },

    /* ═════════════════ SECURITY ═════════════════ */
    {
      topic: "Security",
      type: "single",
      prompt: "Which device protects the network by permitting or denying traffic based on IP address, port number, or application?",
      choices: ["Firewall", "Access point", "VPN gateway", "Intrusion detection system"],
      answer: "A",
      explanation: "Firewalls apply permit/deny rules. An IDS only detects and alerts.",
    },
    {
      topic: "Security",
      type: "single",
      prompt: "How does a firewall determine which traffic to block?",
      choices: [
        "The firewall matches traffic based on the IP address in the ARP table",
        "The firewall performs a one-to-many network address translation",
        "The firewall matches the traffic based on source and destination IP address",
        "The firewall performs a one-to-one network address translation.",
      ],
      answer: "C",
      explanation: "Firewall rules match source/destination IP (plus ports and protocols). NAT translates addresses — it isn't filtering.",
    },
    {
      topic: "Security",
      type: "truefalse",
      prompt: "You plan to use a network firewall to protect computers at a small office.",
      items: [
        ["A firewall can block traffic to specific ports on internal computers.", true],
        ["A firewall can direct all web traffic to a specific IP address.", true],
        ["A firewall can prevent specific apps from running on a computer.", false],
      ],
      explanation: "Firewalls filter ports and can forward/redirect traffic (port forwarding). Stopping apps from running on a PC is endpoint security, not a network firewall.",
    },
    {
      topic: "Security",
      type: "single",
      prompt: "Which best describes confidentiality with regards to network security?",
      choices: [
        "Ensures data is available for access by providing redundant systems.",
        "Ensures data is not changed during transit between system.",
        "Ensures data is kept secret using safeguards to prevent unauthorized access.",
        "Ensures data is trusted and has not been tampered with or changed",
      ],
      answer: "C",
      explanation: "Confidentiality = secret · Integrity = unchanged · Availability = accessible.",
    },
    {
      topic: "Security",
      type: "single",
      prompt: "Which component of the AAA service security model provides identify verification?",
      choices: ["Authentication", "Accounting", "Auditing", "Authorization"],
      answer: "A",
      explanation: "Authentication = who you are · Authorization = what you may do · Accounting = what you did.",
    },
    {
      topic: "Security",
      type: "single",
      prompt: "When setting up a wireless network which security benefit is provided by enabling WPA3?",
      choices: [
        "Limits network access to only specified devices",
        "Sends traffic through an encrypted tunnel",
        "Secures authentication between client and access point",
        "Makes it more difficult to discover wireless network",
      ],
      answer: "C",
      explanation: "WPA3 uses SAE to protect the client–AP authentication handshake.",
    },
    {
      topic: "Security",
      type: "match",
      prompt: "Move the CIA security principles from the list on the left to its example on the right.",
      options: ["Confidentiality", "Integrity", "Availability"],
      items: [
        ["You generate a digital signature and attach it to a message", "Integrity"],
        ["You encrypt a sensitive email message", "Confidentiality"],
        ["You configure three redundant web servers at your company", "Availability"],
      ],
      explanation: "Signature proves it wasn't changed · encryption keeps it secret · redundancy keeps it reachable.",
    },
    {
      topic: "Security",
      type: "match",
      prompt: "Move the MFA factors from the list on the left to their correct examples on the right",
      options: ["Possession", "Inference", "Knowledge"],
      items: [
        ["Specifying your name and password to log on to a service", "Knowledge"],
        ["Entering a one-time security code send to your device after logging in", "Possession"],
        ["Holding your phone to your face to be recognized", "Inference"],
      ],
      note: "The slide says \"Inference\"; the proper term is Inherence (something you are). Expect \"Inherence\" on the exam.",
      explanation: "Knowledge = something you know · Possession = something you have · Inherence = something you are.",
    },
    {
      topic: "Security",
      type: "match",
      prompt: "Move the security options from the list on the left to its characteristics on the right. You may use each security option once, more than once, or not at all.",
      options: ["WEP", "WPA2-Personal", "WPA-Enterprise"],
      items: [
        ["Uses a minimum of 40 bits for encryption", "WEP"],
        ["Use a RADIUS Server for authentication", "WPA-Enterprise"],
        ["Use AES and a pre-shared key for authentication", "WPA2-Personal"],
      ],
      explanation: "WEP = weak 40-bit keys · Enterprise = RADIUS / 802.1X · Personal = pre-shared key (WPA2 uses AES).",
    },
    {
      topic: "Security",
      type: "match",
      prompt: "You need to configure wireless settings for a home router.\nMove the actions from the list on the left to the correct scenarios on the right.",
      options: ["Set the security mode to WPA2-PSK", "Disable SSID broadcasting", "Disable WPS"],
      items: [
        ["You want to prevent users from using the pushbutton method for accessing the network.", "Disable WPS"],
        ["You want devices to use a pre-shared key when connecting to the network.", "Set the security mode to WPA2-PSK"],
        ["You want to prevent devices from discovering the name of the WIFI network", "Disable SSID broadcasting"],
      ],
      explanation: "WPS = push-button join · PSK = pre-shared key · SSID broadcast = the network name showing up.",
    },
    {
      topic: "Security",
      type: "single",
      prompt: "Which component of the AAA service security model provides identity verification?",
      choices: ["Authorization", "Auditing", "Authentication", "Accounting"],
      answer: "C",
      explanation: "Same question, different order — Authentication is C this time.",
    },

    /* ═════════════════ ENDPOINTS & MEDIA TYPES ═════════════════ */
    {
      topic: "Endpoints & Media Types",
      type: "single",
      prompt: "Which wireless security option uses a pre-shared key to authenticate clients?",
      choices: ["WPA2-Personal", "802.1x", "802.1q", "WPA2-Enterprise"],
      answer: "A",
      explanation: "Personal = shared passphrase (PSK). Enterprise/802.1X = per-user login. 802.1Q = VLAN tagging.",
    },
    {
      topic: "Endpoints & Media Types",
      type: "single",
      prompt: "You need to connect a computer's network adapter to a switch using a 1000BASE-T cable. Which connector should you use?",
      choices: ["Coax", "RJ-11", "OS2 LC", "RJ-45"],
      answer: "D",
      explanation: "1000BASE-T = Gigabit Ethernet over twisted-pair copper → RJ-45.",
    },
    {
      topic: "Endpoints & Media Types",
      type: "single",
      prompt: "Which type of connector should you use to terminate unshielded twisted pair (UTP) cable?",
      choices: ["ST (Straight Tip)", "SC (Subscriber Connector)", "RJ-45 (Registered Jack 45)", "OS2 LC"],
      answer: "C",
      explanation: "ST, SC and LC are fiber connectors.",
    },
    {
      topic: "Endpoints & Media Types",
      type: "single",
      prompt: "You want to store files that will be accessible by every user on your network. Which endpoint device do you need?",
      choices: ["Access point", "Server", "Hub", "Switch"],
      answer: "B",
      explanation: "A server is an endpoint that hosts shared resources; the others are network devices.",
    },
    {
      topic: "Endpoints & Media Types",
      type: "single",
      prompt: "What type of interface is the administrator installing in the router?",
      image: "sfp-module.jpg",
      choices: ["USB (Universal Serial Bus)", "SFP (Small Form-factor Pluggable)", "Serial", "PoE (Power over Ethernet)"],
      answer: "B",
      explanation: "SFP slots take hot-swappable transceiver modules (fiber or copper).",
    },
    {
      topic: "Endpoints & Media Types",
      type: "single",
      prompt: "A Cisco PoE switch is shown in the following image. Which type of port will provide both data connectivity and power to an IP phone?",
      notice: "The switch photo for this question is missing from the PDF file, so there's no image here.",
      choices: ["Port identified with number 2", "Ports identified with number 6", "Ports identified with number 7", "Ports identified with number 3 and 4."],
      answer: "B",
      explanation: "Your deck's answer key marks B (ports labeled 6) as the PoE ports.",
    },
    {
      topic: "Endpoints & Media Types",
      type: "single",
      prompt: "Which standard contains the specifications for Wi-Fi networks?",
      choices: ["GSM", "LTE", "IEEE 802.11", "IEEE 802.3", "EIA/TIA 568A"],
      answer: "C",
      explanation: "802.11 = Wi-Fi · 802.3 = wired Ethernet · GSM/LTE = cellular · 568A = cable wiring.",
    },
    {
      topic: "Endpoints & Media Types",
      type: "single",
      prompt: "Which device is an Internet of Things (IoT) device?",
      choices: ["An internet-accessible thermostat", "A video streaming server", "A virtual private network concentrator", "A Cloud-based file storage array"],
      answer: "A",
      explanation: "IoT = everyday objects with network connectivity added.",
    },
    {
      topic: "Endpoints & Media Types",
      type: "single",
      prompt: "Which network technology is not impacted by electromagnetic and radio wave interference?",
      choices: ["Wireless", "Twisted Pair", "Fiber", "Copper"],
      answer: "C",
      explanation: "Fiber carries light, not electricity, so EMI/RFI can't affect it.",
    },
    {
      topic: "Endpoints & Media Types",
      type: "single",
      prompt: "A cisco switch is not accessible from the network. You need to view its running configuration. Which out of band method can you use to access it?",
      choices: ["SSH", "SNMP", "Console", "Telnet"],
      answer: "C",
      explanation: "The console port connects with a cable directly — no network needed.",
    },

    /* ═════════════════ INFRASTRUCTURE ═════════════════ */
    {
      topic: "Infrastructure",
      type: "match",
      prompt: "Examine the connections shown in the following image. Move the cable types on the right to the appropriate connection description on the left. You may use each cable type more than once or not at all.",
      image: "cable-racks.jpg",
      options: ["Straight-through UTP Cable", "Fiber Optic Cable", "Crossover UTP Cable"],
      items: [
        ["Connects Switch to Router R1 Gi0/0/1 interface", "Straight-through UTP Cable"],
        ["Connects Router R2 Gi0/0/0 to Router R3 Gi0/0/0 via underground conduit", "Fiber Optic Cable"],
        ["Connects Router R1 Gi0/0/0 to Router R2 Gi0/0/1", "Crossover UTP Cable"],
        ["Connects Switch S3 to Server0 network interface card", "Straight-through UTP Cable"],
      ],
      explanation: "Unlike devices (switch–router, switch–server) = straight-through · like devices (router–router) = crossover · between buildings = fiber.",
    },
    {
      topic: "Infrastructure",
      type: "multi",
      prompt: "A local company requires two networks in two new buildings. The addresses used in these networks must be in the private network range. Which two address ranges should the company use? (Choose 2.)",
      choices: ["172.16.0.0 to 172.31.255.255", "192.16.0.0 to 192.16.255.255", "11.0.0.0 to 11.255.255.255", "192.168.0.0 to 192.168.255.255"],
      answer: ["A", "D"],
      explanation: "Private ranges: 10.0.0.0/8, 172.16.0.0–172.31.255.255, 192.168.0.0/16. Watch for the 192.16 trap.",
    },

    /* ═════════════════ DIAGNOSING PROBLEMS ═════════════════ */
    {
      topic: "Diagnosing Problems",
      type: "multi",
      prompt: "Examine the following Command Output\nWhich two conclusions can you make from the output of the tracert command? (Choose 2.)",
      image: "tracert-cisco.jpg",
      choices: [
        "The trace successfully reached the www.cisco.com server.",
        "The trace failed after the fourth hop.",
        "The IPv6 address associated with the www.cisco.com server is 2600:1408:c400:38d::b33.",
        "The routers at hops 5 and 6 are offline.",
        "The device sending the trace has IPv6 address 2600:1408:c400:38d::b33.",
      ],
      answer: ["A", "C"],
      explanation: "\"Trace complete\" and the last hop is the destination. Timeouts at hops 5–6 just mean those routers don't reply to traceroute.",
    },
    {
      topic: "Diagnosing Problems",
      type: "multi",
      prompt: "Which two pieces of information should you include when you initially create a support ticket? (Choose 2.)",
      choices: [
        "A detailed description of the fault",
        "Details about the computers connected to the network",
        "A description of the conditions when the fault occurs",
        "The actions taken to resolve the fault",
        "The description of the top-down fault-finding procedure",
      ],
      answer: ["A", "C"],
      explanation: "Capture what's wrong and when it happens. Resolution steps are added later.",
    },
    {
      topic: "Diagnosing Problems",
      type: "recall",
      prompt: "An administrator is configuring the host PC-A on the network shown in the following graphic. PC-A must be able to communicate on the local network and on the internet. There is no DHCP server on the network. What information does the administrator need to input in the IPV4 protocol properties window?",
      image: "pc-a-config.jpg",
      answer: "IP address: an unused host in 172.100.0.0/16 (e.g. 172.100.0.10 — not .1 or .254)\nSubnet mask: 255.255.0.0\nDefault gateway: 172.100.0.1",
      explanation: "/16 = 255.255.0.0. The gateway is Router1's G0/0 on PC-A's network. 172.100.0.254 is already used by the server. DNS is already filled in.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "A help desk technician receives the four trouble tickets listed below. Which ticket should receive the highest priority and be addressed first?",
      choices: [
        "Ticket 1: A user requests relocation of a printer to a different network jack in the same office. The jack must be patched and made active.",
        "Ticket 2: An online webinar is taking place in the conference room. The video conferencing equipment lost internet access.",
        "Ticket 3: A user reports that response time for a cloud-based application is slower than usual.",
        "Ticket 4: Two users report that wireless access in the cafeteria has been down for the last hour.",
      ],
      answer: "B",
      explanation: "A live event with a full outage has the biggest immediate impact.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "You are a senior network administrator tasked with diagnosing intermittent connectivity issues on the executive floor of a multinational corporation, which primarily uses iOS devices. After initial checks, you suspect that the problem may be related to SSID settings and network configuration specifics not aligning correctly with the corporate security protocols. Given the high-security requirements and the exclusive use of iOS devices on this floor, which approach should you take to verify and rectify the network settings directly on the affected devices?",
      choices: ["Network Reset", "Manual Configuration", "Use Fing", "SSID Reconfiguration"],
      answer: "B",
      explanation: "Check and set the SSID, security type and credentials directly on each device. A network reset wipes everything; Fing is only a scanner.",
    },
    {
      topic: "Diagnosing Problems",
      type: "multi",
      prompt: "Which two statements are true about the impact to communication on the network while the router is temporarily offline. Evaluate the Graphic.",
      image: "router-offline.jpg",
      choices: [
        "None of the PC's can access the file server (File-Srv)",
        "The file server (File-Srv) can still access the internet",
        "PC-A and PC-B can still communicate with each other.",
        "PC-A , PC-B, PC-C and PC-D can still communicate with each other",
        "PC-C and PC-D can still communicate with the file server (File-Srv)",
      ],
      answer: ["A", "C"],
      note: "Your slide highlights A and D, but D is wrong. PC-A/PC-B (VLAN 100) and PC-C/PC-D (VLAN 110) are on different subnets, so they need the router to talk to each other. The correct pair is A and C.",
      explanation: "Same-VLAN hosts talk through the switch alone. Anything that crosses VLANs — File-Srv in VLAN 10 or the internet — needs the router.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "Which action does Switch1 take?",
      image: "switch1-flood.jpg",
      choices: [
        "Switch1 queries Switch2 for the MAC address of PC-C",
        "Switch1 drops the frame and sends an error message back to PC-A",
        "Switch1 sends an ARP request to obtain the MAC address of PC-C",
        "Switch1 floods the frame out all active ports except port Gi0/1",
      ],
      answer: "D",
      explanation: "Unknown unicast frames are flooded out every port except the one they came in on. Switches don't send ARP — hosts do.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "Which port should you identify?",
      image: "broadcast-ports.jpg",
      choices: ["D only", "A,B and D only", "B and C only", "B, C and D only"],
      answer: "D",
      explanation: "Broadcasts go out every port except the one they arrived on (A) — including the uplink to the second switch.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "A support technician examines the front panel of a Cisco switch and sees 4 Ethernet cables connected in the first four ports. Port 1,2 and 3 have a green LED. Port 4 has a blinking green light. What is the state of the Port 4?",
      choices: ["Link is up and not stable", "Link is up and there is no activity", "Link is up with cable malfunctions", "Link is up and active"],
      answer: "D",
      explanation: "Solid green = link up, no traffic · blinking green = link up and passing traffic.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "A user reports a problem connecting to network resources. Other users connected to the same switch are not experiencing the same problem. The user's computer is patched to a switch port Gi0/15. The status indicator for this port is blinking alternately green then amber. What does the light pattern indicate about the status of port Gi0/15?",
      choices: [
        "The port is administratively shutdown",
        "The port is experiencing a high rate of errors.",
        "The port is blocked by a firewall rule.",
        "The port is not connected to a powered -on device.",
      ],
      answer: "B",
      explanation: "Alternating green/amber = link fault (errors such as CRC or collisions).",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "What can you tell from the command output? A user report that a company website is not available. The help desk technician issues a tracert command to determine if the server hosting the website is reachable over the network. The output of the command is shown as follows:",
      image: "tracert-192-168-1-10.jpg",
      choices: [
        "The server with address 192.168.1.10 is reachable over the network",
        "The router at hop 3 is not forwarding packets to the IP address 192.168.1.10",
        "Requests to the web server at 192.168.1.10 are being delayed and time out.",
        "The server address 192.168.1.10 is being blocked by a firewall on the router at hop3.",
      ],
      answer: "A",
      explanation: "Hop 5 is the server itself and it replied, so the network path works.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "Which action can be run directly from the Cisco router's IOS mode shown?",
      image: "router1-prompt.png",
      choices: ["Enable a routing process", "Show running system information", "Enter interface IP configuration subcommands", "Select an interface to configure"],
      answer: "B",
      explanation: "# = privileged EXEC, where show commands run. Configuring needs \"configure terminal\" first.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "What can you determine about this switch from the command output? Examine the output of the show mac-address-table command on a Cisco 24 ports Ethernet switch",
      image: "mac-address-table.jpg",
      choices: [
        "There are eleven active ports on this switch",
        "Port Fa0/5 is set to administratively down.",
        "All entries were learned by examining incoming frames.",
        "Port Gi0/1 connects to another switch",
      ],
      answer: "D",
      explanation: "Many MACs in several VLANs on one port = an uplink to another switch. Fa0/5 is STATIC, so not everything was learned.",
    },
    {
      topic: "Diagnosing Problems",
      type: "truefalse",
      prompt: "For each statement about output, select True or False\nYou connect to a Cisco switch and run the following command.\nshow ip interface brief\nThe command displays the following partial output.",
      image: "show-ip-interface-brief.jpg",
      items: [
        ["A device connected to GigabitEthernet0/1 can send out broadcast traffic.", false],
        ["A technician issued the shutdown command on interface GigabitEthernet0/2.", true],
        ["A technician set the IP address for GigabitEthernet0/0 by using the CLI.", true],
      ],
      explanation: "Gi0/1 is down/down, so nothing passes. \"administratively down\" = shutdown command. Method \"manual\" = typed in the CLI.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "You purchase a new Cisco switch, turn it on and connect to its console port. You then run the following command.",
      image: "show-running-config.jpg",
      choices: [
        "The two interfaces can communicate over Layer 2.",
        "The two interfaces are administratively shut down.",
        "The two interfaces have default IP address assigned.",
      ],
      answer: "A",
      explanation: "Switch ports are enabled by default and all start in VLAN 1 — no \"shutdown\" line means they're up.",
    },
    {
      topic: "Diagnosing Problems",
      type: "recall",
      prompt: "A help desk technician is working on a computer that is unable to resolve URLs in the browser. The technician runs the ipconfig/all command and receives the following output.\nYou need to issue a command to view the network devices in the path from the computer to the server that resolves the host name. What command should you issue?",
      image: "ipconfig-dns.jpg",
      answer: "tracert 64.100.8.8",
      explanation: "The DNS server (64.100.8.8) resolves host names; tracert shows every device on the way to it.",
    },
    {
      topic: "Diagnosing Problems",
      type: "recall",
      prompt: "An app on a user's computer is having problems downloading data. The app uses the following URL to download data\nhttps://www.companypro.net:7100/api\nYou need to use Wireshark to capture packets sent to and received from that URL.\nWhat Wireshark filter options would you use to filter the results?",
      answer: "tcp.port == 7100",
      explanation: "HTTPS runs over TCP, and the URL uses the custom port 7100.",
    },
    {
      topic: "Diagnosing Problems",
      type: "recall",
      prompt: "Computers in a small office are unable to access companypro.net. You run the ipconfig command on one of the computers. The results are shown in the exhibit. You need to determine if you can reach the router. Which command should you use?",
      image: "ipconfig-router.jpg",
      answer: "ping 192.168.0.1",
      explanation: "The router is the default gateway, 192.168.0.1.",
    },
    {
      topic: "Diagnosing Problems",
      type: "recall",
      prompt: "You want to list the IPV4 addresses associated with the host name www.companypro.net.\nWhat is the command to execute in this scenario?",
      answer: "nslookup www.companypro.net",
      explanation: "nslookup queries DNS and returns the addresses for a host name.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "A support technician examines the front panel of a Cisco switch and sees 4 Ethernet cables connected in the first four ports. Ports 1, 2, and 3 have a green LED. Port 4 has a blinking green light.",
      choices: ["Link is up with cable malfunctions.", "Link is up and not stable.", "Link is up and active.", "Link is up and there is no activity."],
      answer: "C",
      explanation: "Same question, different order — \"Link is up and active\" is C this time.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "What is the purpose of assigning an IP address to the management VLAN interface on a Layer 2 switch?",
      choices: [
        "To enable the switch to act as a default gateway for the attached devices",
        "To enable the switch to resolve URLs for the attached the devices",
        "To enable the switch to provide DHCP services to other switches in the network",
        "To enable access to the CLI on the switch through Telnet or SSH",
      ],
      answer: "D",
      explanation: "Same question, different order — the CLI-access answer is D this time.",
    },
    {
      topic: "Diagnosing Problems",
      type: "recall",
      prompt: "What command will display the following output?",
      image: "cdp-neighbors.jpg",
      answer: "show cdp neighbors",
      explanation: "Device ID, local interface, holdtime, capability, platform and port ID are the CDP neighbor columns.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "A network administrator can successfully ping the URL www.cisco.com, but cannot ping a corporate server located at a remote branch in another city. You need to identify the specific router where packets are being dropped in the path to the remote branch. Which utility should you use?",
      choices: ["Traceroute", "Netstat", "telnet", "ipconfig"],
      answer: "A",
      explanation: "traceroute shows each hop until replies stop.",
    },
    {
      topic: "Diagnosing Problems",
      type: "multi",
      prompt: "You need to determine whether a remote host is reachable through the network. Which two commands can you see? Each correct command is a complete solution.",
      choices: ["Netstat", "Ping", "Route print", "Ipconfig", "Traceroute or tracert"],
      answer: ["B", "E"],
      explanation: "Both ping and traceroute test whether a remote host answers.",
    },
    {
      topic: "Diagnosing Problems",
      type: "single",
      prompt: "In a network with multiple VLANs, a user is unable to communicate with other users in the same VLAN but can communicate with users in different VLANs. Which of the following could be the cause of this issue?",
      choices: [
        "user's switchport is not configured as an access port.",
        "user's switchport is not assigned to the correct VLAN.",
        "user's switchport is configured with the wrong duplex setting.",
        "user's switchport is experiencing a spanning tree loop.",
      ],
      answer: "B",
      explanation: "If the port is in the wrong VLAN, the user's \"own\" VLAN peers are really on a different network.",
    },
  ],
};

/* ==========================================================================
   2) HELPERS
   ========================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const LETTERS = "ABCDEFGHIJ";

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage unavailable (private mode etc.) — ignore */
    }
  },
};

const reducedMotion = () =>
  typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function restartAnimation(node, cls) {
  node.classList.remove(cls);
  void node.offsetWidth; // force reflow so the animation replays
  node.classList.add(cls);
}

function vibrate(pattern) {
  try {
    if (navigator.vibrate) navigator.vibrate(pattern);
  } catch {
    /* not supported */
  }
}

function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

/* ==========================================================================
   3) SOUND ENGINE — synthesized with the Web Audio API (no audio files)
   ========================================================================== */
const Sound = (() => {
  let ctx = null;
  let master = null;
  let enabled = store.get("quiz:sound", QUIZ_CONFIG.soundOnByDefault);

  function getCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.7;
      master.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  /** Play one shaped oscillator note. */
  function note({ freq, to = null, type = "sine", at = 0, dur = 0.15, vol = 0.3, attack = 0.006, lowpass = null }) {
    const c = getCtx();
    if (!c) return;
    const t0 = c.currentTime + 0.01 + at;
    const osc = c.createOscillator();
    const gain = c.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (to) osc.frequency.exponentialRampToValueAtTime(to, t0 + dur);

    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(vol, t0 + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

    let out = osc;
    if (lowpass) {
      const filter = c.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = lowpass;
      out.connect(filter);
      out = filter;
    }
    out.connect(gain);
    gain.connect(master);

    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  return {
    get enabled() {
      return enabled;
    },
    unlock() {
      getCtx();
    },
    toggle() {
      enabled = !enabled;
      store.set("quiz:sound", enabled);
      if (enabled) this.click();
      return enabled;
    },
    /** Crisp, ultra-short soft pop. */
    click() {
      if (!enabled) return;
      note({ freq: 1600, to: 900, type: "sine", dur: 0.045, vol: 0.22, attack: 0.002 });
    },
    /** Cheerful rising two-tone chime: C5 → E5. */
    correct() {
      if (!enabled) return;
      note({ freq: 523.25, type: "triangle", dur: 0.13, vol: 0.32 });
      note({ freq: 523.25, type: "square", dur: 0.13, vol: 0.07, lowpass: 2800 });
      note({ freq: 659.25, type: "triangle", at: 0.11, dur: 0.32, vol: 0.32 });
      note({ freq: 659.25, type: "square", at: 0.11, dur: 0.32, vol: 0.07, lowpass: 2800 });
    },
    /** Low, descending buzz/thud. */
    incorrect() {
      if (!enabled) return;
      note({ freq: 220, to: 92, type: "sawtooth", dur: 0.34, vol: 0.24, lowpass: 750 });
      note({ freq: 110, to: 55, type: "square", dur: 0.28, vol: 0.16, lowpass: 400 });
    },
    /** Little arcade fanfare for the results screen: C5 E5 G5 C6. */
    complete() {
      if (!enabled) return;
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
        const last = i === 3;
        note({ freq: f, type: "triangle", at: i * 0.11, dur: last ? 0.5 : 0.16, vol: 0.28 });
        note({ freq: f, type: "square", at: i * 0.11, dur: last ? 0.5 : 0.16, vol: 0.06, lowpass: 2500 });
      });
    },
  };
})();

/* ==========================================================================
   4) QUESTION BANK — validated, normalized copy of the config questions
   ========================================================================== */
function letterIndex(letter) {
  return LETTERS.indexOf(String(letter).trim().toUpperCase());
}

function prepareBank(raw) {
  const bank = [];
  (raw || []).forEach((q, i) => {
    const fail = (msg) => console.warn(`[Quiz] Skipping question #${i + 1}: ${msg}`, q);
    if (!q || typeof q.prompt !== "string" || !q.prompt.trim()) return fail("missing prompt");

    const type = q.type || "single";
    const base = {
      ...q,
      type,
      id: q.id != null ? String(q.id) : `q${i + 1}`,
      topic: q.topic || "General",
      bankIndex: bank.length,
    };

    if (type === "single" || type === "multi") {
      if (!Array.isArray(q.choices) || q.choices.length < 2) return fail("needs at least 2 choices");
      const letters = Array.isArray(q.answer) ? q.answer : [q.answer];
      const idx = letters.map(letterIndex);
      if (!idx.length || idx.some((n) => n < 0 || n >= q.choices.length)) {
        return fail(`answer ${JSON.stringify(q.answer)} doesn't match a choice letter`);
      }
      if (type === "single" && idx.length !== 1) return fail("single questions need exactly one answer letter");
      if (type === "multi" && new Set(idx).size < 2) return fail("multi questions need 2+ answer letters");
      bank.push({ ...base, kind: "choice", correct: [...new Set(idx)].sort((a, b) => a - b) });
    } else if (type === "match" || type === "truefalse") {
      const options = type === "truefalse" ? ["True", "False"] : q.options;
      if (!Array.isArray(options) || options.length < 2) return fail("needs at least 2 options");
      if (!Array.isArray(q.items) || !q.items.length) return fail("needs at least 1 item");
      const items = q.items.map(([text, ans]) => ({
        text,
        answer: type === "truefalse" ? (ans ? "True" : "False") : ans,
      }));
      if (items.some((it) => typeof it.text !== "string" || !options.includes(it.answer))) {
        return fail("every item needs text and an answer that is one of the options");
      }
      bank.push({ ...base, kind: "match", options, items });
    } else if (type === "recall") {
      if (typeof q.answer !== "string" || !q.answer.trim()) return fail("recall questions need an answer string");
      bank.push({ ...base, kind: "recall" });
    } else {
      fail(`unknown type "${type}"`);
    }
  });
  return bank;
}

const BANK = prepareBank(QUIZ_CONFIG.questions);
const ALL_TOPICS = "__all__";

/* ==========================================================================
   5) STATE
   ========================================================================== */
const state = {
  topic: store.get("quiz:topic", ALL_TOPICS),
  length: store.get("quiz:length", QUIZ_CONFIG.defaultLessonLength),
  order: store.get("quiz:order", QUIZ_CONFIG.defaultOrder),
  deck: [],
  index: 0,
  correct: 0,
  streak: 0,
  bestStreak: 0,
  missed: [],
  locked: false,
  selected: null, // Set (multi) or Array (match)
  drawerMode: null, // "correct" | "wrong" | "reveal" | null
  lastPool: [],
  lastLimit: 0,
};

let el = {};
let toastTimer = null;

const current = () => state.deck[state.index];

/* ==========================================================================
   6) START SCREEN
   ========================================================================== */
function topicCounts() {
  const counts = new Map();
  BANK.forEach((q) => counts.set(q.topic, (counts.get(q.topic) || 0) + 1));
  return counts;
}

function makeOption({ value, label, count, color }) {
  const btn = make("button", "option");
  btn.type = "button";
  btn.setAttribute("role", "radio");
  btn.dataset.value = String(value);
  btn.dataset.clickSound = "";

  if (color) {
    const dot = make("span", "option-dot");
    dot.style.setProperty("--dot", color);
    btn.append(dot);
  }
  btn.append(make("span", "option-label", label));
  if (count != null) btn.append(make("span", "option-count", String(count)));
  return btn;
}

function setChecked(group, value) {
  $$(".option", group).forEach((b) => b.setAttribute("aria-checked", String(b.dataset.value === String(value))));
}

function renderStart() {
  el.title.textContent = QUIZ_CONFIG.title;
  el.subtitle.textContent = QUIZ_CONFIG.subtitle;
  document.title = `${QUIZ_CONFIG.title} Reviewer`;

  if (!BANK.length) {
    el.subtitle.textContent = "No valid questions found. Check QUIZ_CONFIG.questions in script.js.";
    el.startBtn.disabled = true;
    return;
  }

  // Topics
  const counts = topicCounts();
  if (state.topic !== ALL_TOPICS && !counts.has(state.topic)) state.topic = ALL_TOPICS;
  const topicButtons = [makeOption({ value: ALL_TOPICS, label: "All topics", count: BANK.length, color: "#3C3C3C" })];
  let c = 0;
  counts.forEach((count, topic) => {
    const color = QUIZ_CONFIG.topicColors[c++ % QUIZ_CONFIG.topicColors.length];
    topicButtons.push(makeOption({ value: topic, label: topic, count, color }));
  });
  el.topicList.replaceChildren(...topicButtons);
  setChecked(el.topicList, state.topic);

  // Lesson length
  if (!QUIZ_CONFIG.lessonLengths.map(String).includes(String(state.length))) {
    state.length = QUIZ_CONFIG.defaultLessonLength;
  }
  el.lengthList.replaceChildren(
    ...QUIZ_CONFIG.lessonLengths.map((n) => makeOption({ value: n, label: n === 0 ? "All" : String(n) }))
  );
  setChecked(el.lengthList, state.length);

  // Order
  if (state.order !== "pdf" && state.order !== "shuffle") state.order = "pdf";
  el.orderList.replaceChildren(
    makeOption({ value: "pdf", label: "PDF order" }),
    makeOption({ value: "shuffle", label: "Shuffled" })
  );
  setChecked(el.orderList, state.order);
}

function currentPool() {
  return state.topic === ALL_TOPICS ? BANK : BANK.filter((q) => q.topic === state.topic);
}

/* ==========================================================================
   7) LESSON FLOW
   ========================================================================== */
function startLesson(pool, limit) {
  if (!pool.length) return;
  state.lastPool = pool;
  state.lastLimit = limit;

  let questions = state.order === "shuffle" ? shuffle(pool) : pool.slice().sort((a, b) => a.bankIndex - b.bankIndex);
  if (limit > 0) questions = questions.slice(0, limit);

  state.deck = questions.map((q) => {
    if (q.kind !== "choice") return { ...q };
    const identity = q.choices.map((_, i) => i);
    return { ...q, order: QUIZ_CONFIG.shuffleChoices ? shuffle(identity) : identity };
  });
  state.index = 0;
  state.correct = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.missed = [];
  state.locked = false;

  closeDrawer();
  updateProgress(0);
  updateStreak(false);
  showScreen("quiz");
  renderQuestion();
}

/** Letter shown on screen for an original choice index. */
function letterFor(q, origIndex) {
  return LETTERS[q.order ? q.order.indexOf(origIndex) : origIndex];
}

function tagLabel(q) {
  const raw = QUIZ_CONFIG.typeLabels[q.type] || "Question";
  return raw.replace("{n}", q.kind === "choice" ? String(q.correct.length) : "");
}

function renderQuestion() {
  const q = current();
  state.locked = false;
  state.drawerMode = null;
  state.selected = q.kind === "match" ? new Array(q.items.length).fill(null) : new Set();

  el.qTag.textContent = tagLabel(q);
  el.qTag.dataset.type = q.type;
  el.qTopic.textContent = q.topic;
  el.qPrompt.textContent = q.prompt;

  // Exhibit image
  if (q.image) {
    el.qImg.src = QUIZ_CONFIG.imageBase + q.image;
    el.qImg.alt = q.imageAlt || "Exhibit for this question";
    el.qFigure.hidden = false;
  } else {
    el.qImg.removeAttribute("src");
    el.qFigure.hidden = true;
  }

  // Exhibit text
  el.qExhibit.textContent = q.exhibit || "";
  el.qExhibit.hidden = !q.exhibit;

  // Pre-answer notice
  el.qNotice.textContent = q.notice || "";
  el.qNotice.hidden = !q.notice;

  // Answer area
  if (q.kind === "choice") el.answerArea.replaceChildren(buildChoices(q));
  else if (q.kind === "match") el.answerArea.replaceChildren(buildMatch(q));
  else el.answerArea.replaceChildren(make("div", "recall-box", "Answer it in your head (or out loud), then tap Show answer."));

  // Bottom controls
  const needsCheck = q.type !== "single";
  el.hint.textContent = "Tap an answer";
  el.hint.hidden = needsCheck;
  el.hint.classList.remove("is-hidden");
  el.checkbar.hidden = !needsCheck;
  el.checkBtn.textContent = q.kind === "recall" ? "Show answer" : "Check";
  updateCheckButton();

  requestAnimationFrame(() => {
    el.quizBody.style.paddingBottom = needsCheck ? `${el.checkbar.offsetHeight + 16}px` : "";
  });
  window.scrollTo(0, 0);
  restartAnimation(el.card, "slide-in");
}

function buildChoices(q) {
  const wrap = make("div", "choices");
  q.order.forEach((orig, pos) => {
    const btn = make("button", "choice");
    btn.type = "button";
    btn.dataset.orig = String(orig);
    if (q.type === "multi") btn.setAttribute("aria-pressed", "false");

    const key = make("span", "choice-key", LETTERS[pos]);
    key.setAttribute("aria-hidden", "true");
    btn.append(key, make("span", "choice-text", q.choices[orig]));
    btn.addEventListener("click", () => onChoice(pos));
    wrap.append(btn);
  });
  return wrap;
}

function buildMatch(q) {
  const list = make("div", "match-list");
  q.items.forEach((item, idx) => {
    const card = make("div", "match-item");
    const text = make("p", "match-text");
    if (q.items.length > 1) text.append(make("b", null, `${idx + 1}.`));
    text.append(document.createTextNode(item.text));

    const pills = make("div", "pills");
    pills.setAttribute("role", "radiogroup");
    pills.setAttribute("aria-label", `Answer for item ${idx + 1}`);
    q.options.forEach((opt) => {
      const pill = make("button", "pill", opt);
      pill.type = "button";
      pill.dataset.value = opt;
      pill.setAttribute("role", "radio");
      pill.setAttribute("aria-checked", "false");
      pill.addEventListener("click", () => onMatchPick(idx, opt, pills));
      pills.append(pill);
    });

    card.append(text, pills);
    list.append(card);
  });
  return list;
}

function onChoice(pos) {
  if (state.locked) return;
  const q = current();
  if (q.kind !== "choice" || pos < 0 || pos >= q.order.length) return;
  const orig = q.order[pos];

  if (q.type === "single") {
    submitChoice([orig]);
    return;
  }

  // Multi-select: toggle
  const btn = $$(".choice", el.answerArea)[pos];
  if (state.selected.has(orig)) state.selected.delete(orig);
  else state.selected.add(orig);
  const on = state.selected.has(orig);
  btn.classList.toggle("is-selected", on);
  btn.setAttribute("aria-pressed", String(on));
  Sound.click();
  updateCheckButton();
}

function onMatchPick(idx, value, group) {
  if (state.locked) return;
  state.selected[idx] = value;
  $$(".pill", group).forEach((p) => {
    const on = p.dataset.value === value;
    p.classList.toggle("is-selected", on);
    p.setAttribute("aria-checked", String(on));
  });
  Sound.click();
  updateCheckButton();
}

function updateCheckButton() {
  const q = current();
  let ready = true;
  if (q.type === "multi") ready = state.selected.size === q.correct.length;
  else if (q.kind === "match") ready = state.selected.every((v) => v !== null);
  el.checkBtn.disabled = !ready;
}

function check() {
  if (state.locked || el.checkbar.hidden || el.checkBtn.disabled) return;
  const q = current();
  if (q.kind === "choice") submitChoice([...state.selected]);
  else if (q.kind === "match") submitMatch();
  else revealRecall();
}

function submitChoice(picked) {
  const q = current();
  state.locked = true;
  const correctSet = new Set(q.correct);
  const isRight = picked.length === q.correct.length && picked.every((i) => correctSet.has(i));

  $$(".choice", el.answerArea).forEach((btn) => {
    const orig = Number(btn.dataset.orig);
    btn.disabled = true;
    btn.classList.remove("is-selected");
    if (correctSet.has(orig)) {
      btn.classList.add("is-correct");
      if (isRight) btn.classList.add("pop");
    } else if (picked.includes(orig)) {
      btn.classList.add("is-wrong");
    } else {
      btn.classList.add("is-dim");
    }
  });

  record(isRight, { picked });
  openDrawer(isRight ? "correct" : "wrong");
}

function submitMatch() {
  const q = current();
  state.locked = true;
  let right = 0;

  $$(".match-item", el.answerArea).forEach((card, idx) => {
    const chosen = state.selected[idx];
    const answer = q.items[idx].answer;
    const ok = chosen === answer;
    if (ok) right++;
    card.classList.add(ok ? "is-right" : "is-off");
    $$(".pill", card).forEach((pill) => {
      const v = pill.dataset.value;
      pill.disabled = true;
      pill.classList.remove("is-selected");
      if (v === answer) pill.classList.add(ok ? "is-correct" : "is-answer");
      else if (v === chosen) pill.classList.add("is-wrong");
      else pill.classList.add("is-dim");
    });
  });

  const isRight = right === q.items.length;
  record(isRight, { matched: right });
  openDrawer(isRight ? "correct" : "wrong", { matched: right });
}

function revealRecall() {
  state.locked = true;
  el.checkbar.hidden = true;
  Sound.click();
  openDrawer("reveal");
}

function gradeRecall(gotIt) {
  if (state.drawerMode !== "reveal") return;
  record(gotIt, { selfGraded: true });
  advance();
}

/** Update score, streak, sounds and progress after any answer. */
function record(isRight, info) {
  const q = current();
  if (isRight) {
    state.correct++;
    state.streak++;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    Sound.correct();
    vibrate(12);
    const milestone = QUIZ_CONFIG.phrases.streak[state.streak];
    if (milestone) showToast(milestone);
  } else {
    state.streak = 0;
    state.missed.push({ question: q, info });
    Sound.incorrect();
    vibrate([40, 40, 40]);
  }
  updateProgress((state.index + 1) / state.deck.length);
  updateStreak(isRight);
  el.hint.classList.add("is-hidden");
  el.checkbar.hidden = true;
}

function next() {
  if (!el.drawer.classList.contains("is-open") || state.drawerMode === "reveal") return;
  Sound.click();
  advance();
}

function advance() {
  closeDrawer();
  state.index++;

  if (state.index >= state.deck.length) {
    setTimeout(showResults, 220);
    return;
  }

  const delay = reducedMotion() ? 0 : 190;
  el.card.classList.remove("slide-in");
  el.card.classList.add("slide-out");
  setTimeout(() => {
    el.card.classList.remove("slide-out");
    renderQuestion();

    const total = state.deck.length;
    if (total >= 3 && state.index === total - 1) showToast(QUIZ_CONFIG.phrases.lastOne, "is-info");
    else if (total >= 6 && state.index === Math.floor(total / 2)) showToast(QUIZ_CONFIG.phrases.halfway, "is-info");
  }, delay);
}

/* ==========================================================================
   8) FEEDBACK UI
   ========================================================================== */
function correctChoiceLines(q) {
  return q.correct
    .slice()
    .sort((a, b) => q.order.indexOf(a) - q.order.indexOf(b))
    .map((orig) => `${letterFor(q, orig)}. ${q.choices[orig]}`);
}

function openDrawer(mode, extra = {}) {
  const q = current();
  state.drawerMode = mode;

  el.drawer.classList.toggle("is-correct", mode === "correct");
  el.drawer.classList.toggle("is-wrong", mode === "wrong");
  el.drawer.classList.toggle("is-reveal", mode === "reveal");

  // Title
  if (mode === "correct") el.drawerTitle.textContent = pick(QUIZ_CONFIG.phrases.correct);
  else if (mode === "wrong") el.drawerTitle.textContent = pick(QUIZ_CONFIG.phrases.incorrect);
  else el.drawerTitle.textContent = QUIZ_CONFIG.phrases.reveal;

  // Answer block
  const answer = [];
  if (mode === "reveal") {
    answer.push(document.createTextNode(q.answer));
  } else if (q.kind === "choice") {
    const lines = correctChoiceLines(q);
    answer.push(make("strong", null, lines.length > 1 ? "Correct answers:" : "Correct answer:"));
    lines.forEach((line) => answer.push(make("span", "answer-line", line)));
  } else if (q.kind === "match" && mode === "wrong") {
    answer.push(make("strong", null, `${extra.matched} of ${q.items.length} correct`));
    answer.push(make("span", "answer-line", "The right answer is highlighted in green on each item."));
  }
  el.drawerAnswer.replaceChildren(...answer);
  el.drawerAnswer.hidden = answer.length === 0;

  // Note + explanation
  el.drawerNote.textContent = q.note ? `📌 ${q.note}` : "";
  el.drawerNote.hidden = !q.note;
  el.drawerExplain.textContent = q.explanation || "";
  el.drawerExplain.hidden = !q.explanation;

  // Buttons
  const reveal = mode === "reveal";
  el.continueBtn.hidden = reveal;
  el.missedBtn.hidden = !reveal;
  el.gotBtn.hidden = !reveal;
  el.drawerActions.classList.toggle("is-split", reveal);
  el.continueBtn.textContent = state.index === state.deck.length - 1 ? "Finish" : "Continue";

  el.drawer.scrollTop = 0;
  el.drawer.classList.add("is-open");
  el.drawer.setAttribute("aria-hidden", "false");

  // Make room so the drawer never hides the answer
  requestAnimationFrame(() => {
    const h = el.drawer.offsetHeight;
    el.quizBody.style.paddingBottom = `${h + 16}px`;
    if (reveal) return;
    const target =
      $(".match-item.is-off", el.answerArea) || $(".choice.is-correct", el.answerArea) || $(".match-item", el.answerArea);
    if (target) {
      const limit = window.innerHeight - h - 12;
      const rect = target.getBoundingClientRect();
      if (rect.bottom > limit) {
        const delta = Math.min(rect.bottom - limit, rect.top - 70);
        if (delta > 0) window.scrollBy({ top: delta, behavior: reducedMotion() ? "auto" : "smooth" });
      }
    }
  });

  setTimeout(() => {
    if (!el.drawer.classList.contains("is-open")) return;
    (reveal ? el.gotBtn : el.continueBtn).focus({ preventScroll: true });
  }, 320);
}

function closeDrawer() {
  state.drawerMode = null;
  el.drawer.classList.remove("is-open");
  el.drawer.setAttribute("aria-hidden", "true");
}

function updateProgress(ratio) {
  const pct = Math.max(0, Math.min(1, ratio)) * 100;
  el.progressFill.style.width = `${pct}%`;
  el.progress.setAttribute("aria-valuenow", String(Math.round(pct)));
}

function updateStreak(bump) {
  el.streakCount.textContent = String(state.streak);
  el.streak.classList.toggle("is-hot", state.streak >= 2);
  el.streak.setAttribute("aria-label", `Answer streak: ${state.streak}`);
  if (bump && state.streak > 0) restartAnimation(el.streak, "bump");
}

function showToast(text, variant = "") {
  clearTimeout(toastTimer);
  el.toast.textContent = text;
  el.toast.className = `toast ${variant}`.trim();
  void el.toast.offsetWidth;
  el.toast.classList.add("is-show");
  toastTimer = setTimeout(() => el.toast.classList.remove("is-show"), 1950);
}

/* ==========================================================================
   9) LIGHTBOX (tap an exhibit to zoom)
   ========================================================================== */
function openLightbox() {
  if (!el.qImg.getAttribute("src")) return;
  el.lightboxImg.src = el.qImg.src;
  el.lightboxImg.alt = el.qImg.alt;
  el.lightbox.hidden = false;
  el.lightboxScroll.scrollTo(0, 0);
  el.lightboxClose.focus({ preventScroll: true });
}

function closeLightbox() {
  el.lightbox.hidden = true;
  el.qFigure.focus({ preventScroll: true });
}

/* ==========================================================================
   10) RESULTS
   ========================================================================== */
function reviewItem({ question: q, info }) {
  const li = make("li");
  li.append(make("p", "review-q", q.prompt));

  if (q.kind === "choice") {
    if (info.picked && info.picked.length) {
      const yours = info.picked
        .slice()
        .sort((a, b) => q.order.indexOf(a) - q.order.indexOf(b))
        .map((o) => `${letterFor(q, o)}. ${q.choices[o]}`)
        .join("\n");
      li.append(make("p", "review-a is-wrong", `✗ ${yours}`));
    }
    li.append(make("p", "review-a is-correct", `✓ ${correctChoiceLines(q).join("\n")}`));
  } else if (q.kind === "match") {
    q.items.forEach((it) => li.append(make("p", "review-a is-correct", `✓ ${it.text} → ${it.answer}`)));
  } else {
    li.append(make("p", "review-a is-correct", `✓ ${q.answer}`));
  }

  if (q.note) li.append(make("p", "review-x", `📌 ${q.note}`));
  if (q.explanation) li.append(make("p", "review-x", q.explanation));
  return li;
}

function showResults() {
  const total = state.deck.length;
  const accuracy = total ? Math.round((state.correct / total) * 100) : 0;
  const tier = QUIZ_CONFIG.results.find((r) => accuracy >= r.min) || QUIZ_CONFIG.results[QUIZ_CONFIG.results.length - 1];

  el.resultTitle.textContent = tier.title;
  el.resultMessage.textContent = tier.message;
  el.statScore.textContent = `${state.correct}/${total}`;
  el.statStreak.textContent = String(state.bestStreak);
  el.statAccuracy.textContent = "0%";

  const missed = state.missed;
  el.review.hidden = missed.length === 0;
  el.review.open = false;
  el.reviewCount.textContent = String(missed.length);
  el.reviewList.replaceChildren(...missed.map(reviewItem));
  el.retryMissedBtn.hidden = missed.length === 0;

  el.checkbar.hidden = true;
  el.quizBody.style.paddingBottom = "";
  showScreen("result");
  Sound.complete();
  countUp(el.statAccuracy, accuracy, "%", 450);
  if (accuracy >= 70) confetti();
}

function countUp(node, target, suffix, delay = 0) {
  if (reducedMotion() || target === 0) {
    node.textContent = `${target}${suffix}`;
    return;
  }
  const duration = 800;
  setTimeout(() => {
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      node.textContent = `${Math.round(target * eased)}${suffix}`;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, delay);
}

function confetti() {
  if (reducedMotion()) return;
  const colors = ["#58CC02", "#1CB0F6", "#FFC800", "#FF9600", "#CE82FF", "#FF4B4B"];
  const layer = make("div", "confetti");
  layer.setAttribute("aria-hidden", "true");
  for (let i = 0; i < 70; i++) {
    const piece = make("i");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = pick(colors);
    piece.style.setProperty("--dx", `${(Math.random() - 0.5) * 160}px`);
    piece.style.setProperty("--rot", `${360 + Math.random() * 720}deg`);
    piece.style.setProperty("--dur", `${2.2 + Math.random() * 1.6}s`);
    piece.style.setProperty("--delay", `${Math.random() * 0.5}s`);
    if (Math.random() > 0.5) piece.style.borderRadius = "50%";
    layer.append(piece);
  }
  document.body.append(layer);
  setTimeout(() => layer.remove(), 4600);
}

/* ==========================================================================
   11) SCREENS, MODAL, SOUND TOGGLE
   ========================================================================== */
function showScreen(name) {
  Object.entries(el.screens).forEach(([key, node]) => node.classList.toggle("is-active", key === name));
  if (name !== "quiz") el.checkbar.hidden = true;
  window.scrollTo(0, 0);
}

function isQuizActive() {
  return el.screens.quiz.classList.contains("is-active");
}

function openModal() {
  el.modal.hidden = false;
  requestAnimationFrame(() => el.modal.classList.add("is-open"));
  setTimeout(() => el.stayBtn.focus({ preventScroll: true }), 50);
}

function closeModal(after) {
  el.modal.classList.remove("is-open");
  setTimeout(
    () => {
      el.modal.hidden = true;
      if (after) after();
    },
    reducedMotion() ? 0 : 260
  );
}

function syncSoundButtons() {
  $$("[data-sound-toggle]").forEach((btn) => {
    btn.classList.toggle("is-muted", !Sound.enabled);
    btn.setAttribute("aria-pressed", String(Sound.enabled));
    btn.setAttribute("aria-label", Sound.enabled ? "Mute sound" : "Unmute sound");
  });
}

/* ==========================================================================
   12) INIT & EVENTS
   ========================================================================== */
function init() {
  el = {
    screens: {
      start: $("#screen-start"),
      quiz: $("#screen-quiz"),
      result: $("#screen-result"),
    },
    title: $("#quiz-title"),
    subtitle: $("#quiz-subtitle"),
    topicList: $("#topic-list"),
    lengthList: $("#length-list"),
    orderList: $("#order-list"),
    startBtn: $("#btn-start"),

    quitBtn: $("#btn-quit"),
    progress: $("#progress"),
    progressFill: $("#progress-fill"),
    streak: $("#streak"),
    streakCount: $("#streak-count"),
    quizBody: $("#quiz-body"),
    toast: $("#toast"),
    card: $("#question-card"),
    qTag: $("#q-tag"),
    qTopic: $("#q-topic"),
    qPrompt: $("#q-prompt"),
    qFigure: $("#q-figure"),
    qImg: $("#q-img"),
    qExhibit: $("#q-exhibit"),
    qNotice: $("#q-notice"),
    answerArea: $("#answer-area"),
    hint: $("#quiz-hint"),
    checkbar: $("#checkbar"),
    checkBtn: $("#btn-check"),

    drawer: $("#drawer"),
    drawerTitle: $("#drawer-title"),
    drawerAnswer: $("#drawer-answer"),
    drawerNote: $("#drawer-note"),
    drawerExplain: $("#drawer-explain"),
    drawerActions: $("#drawer-actions"),
    continueBtn: $("#btn-continue"),
    missedBtn: $("#btn-missed"),
    gotBtn: $("#btn-got"),

    lightbox: $("#lightbox"),
    lightboxImg: $("#lightbox-img"),
    lightboxScroll: $("#lightbox-scroll"),
    lightboxClose: $("#lightbox-close"),

    modal: $("#modal"),
    stayBtn: $("#btn-stay"),
    endBtn: $("#btn-end"),

    resultTitle: $("#result-title"),
    resultMessage: $("#result-message"),
    statScore: $("#stat-score"),
    statAccuracy: $("#stat-accuracy"),
    statStreak: $("#stat-streak"),
    review: $("#review"),
    reviewCount: $("#review-count"),
    reviewList: $("#review-list"),
    retryBtn: $("#btn-retry"),
    retryMissedBtn: $("#btn-retry-missed"),
    homeBtn: $("#btn-home"),
  };

  renderStart();
  syncSoundButtons();

  // Browsers only allow audio after a user gesture
  const unlock = () => Sound.unlock();
  document.addEventListener("pointerdown", unlock, { once: true });
  document.addEventListener("keydown", unlock, { once: true });

  // Soft click sound on any marked button
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-click-sound]")) Sound.click();
  });

  // Start screen selections
  const bindRadio = (group, key, cast) =>
    group.addEventListener("click", (e) => {
      const btn = e.target.closest(".option");
      if (!btn) return;
      state[key] = cast(btn.dataset.value);
      store.set(`quiz:${key}`, state[key]);
      setChecked(group, state[key]);
    });
  bindRadio(el.topicList, "topic", String);
  bindRadio(el.lengthList, "length", Number);
  bindRadio(el.orderList, "order", String);

  el.startBtn.addEventListener("click", () => startLesson(currentPool(), Number(state.length)));

  // Quiz
  el.checkBtn.addEventListener("click", check);
  el.continueBtn.addEventListener("click", next);
  el.gotBtn.addEventListener("click", () => gradeRecall(true));
  el.missedBtn.addEventListener("click", () => gradeRecall(false));
  el.quitBtn.addEventListener("click", openModal);
  el.stayBtn.addEventListener("click", () => closeModal());
  el.endBtn.addEventListener("click", () =>
    closeModal(() => {
      closeDrawer();
      showScreen("start");
    })
  );
  $$("[data-modal-close]").forEach((n) => n.addEventListener("click", () => closeModal()));

  // Exhibit zoom
  el.qFigure.addEventListener("click", openLightbox);
  el.lightboxClose.addEventListener("click", closeLightbox);
  el.lightbox.addEventListener("click", (e) => {
    if (e.target === el.lightbox || e.target === el.lightboxScroll) closeLightbox();
  });

  // Results
  el.retryBtn.addEventListener("click", () => startLesson(state.lastPool, state.lastLimit));
  el.retryMissedBtn.addEventListener("click", () => startLesson(state.missed.map((m) => m.question), 0));
  el.homeBtn.addEventListener("click", () => {
    renderStart();
    showScreen("start");
  });

  // Sound toggles
  $$("[data-sound-toggle]").forEach((btn) =>
    btn.addEventListener("click", () => {
      Sound.toggle();
      syncSoundButtons();
    })
  );

  // Keyboard: A–E or 1–9 pick a choice · Enter = Check / Continue · Esc = close/quit · M = mute
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const modalOpen = !el.modal.hidden;
    const lightboxOpen = !el.lightbox.hidden;

    if (e.key === "Escape") {
      if (lightboxOpen) closeLightbox();
      else if (modalOpen) closeModal();
      else if (isQuizActive()) openModal();
      return;
    }
    if (lightboxOpen || modalOpen) return;

    if (e.key === "m" || e.key === "M") {
      Sound.toggle();
      syncSoundButtons();
      return;
    }
    if (!isQuizActive()) return;

    const drawerOpen = el.drawer.classList.contains("is-open");
    if (drawerOpen) {
      if ((e.key === "Enter" || e.key === " ") && state.drawerMode !== "reveal") {
        e.preventDefault();
        next();
      }
      return;
    }
    if (state.locked) return;

    if (e.key === "Enter") {
      e.preventDefault();
      check();
      return;
    }
    const q = current();
    if (q.kind !== "choice") return;
    let pos = -1;
    if (/^[1-9]$/.test(e.key)) pos = Number(e.key) - 1;
    else if (/^[a-j]$/i.test(e.key)) pos = letterIndex(e.key);
    if (pos >= 0 && pos < q.order.length) {
      e.preventDefault();
      onChoice(pos);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
