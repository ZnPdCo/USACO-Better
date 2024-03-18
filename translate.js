// 训练页内容
    if(location.search == '?page=training') {
        $('.panel').html(`
<h2>训练</h2>
 
<p><b>新资源：</b> 一群敬业的学长们已经准备了一个新的培训平台： <a href="https://usaco.guide/">USACO Guide</a>。
 
<p> USACO的<a href="https://usaco.training">培训页面</a> 提供了数百个小时的免费指导和练习问题，帮助提高编程和问题解决能力。
（注：我们正在迁移培训页面至新系统；与此同时，它们托管在我们的旧系统上，在这段时间内，全新的usaco.org用户账户无法被识别 —— 您可能需要创建一个单独的账户来访问培训页面。）
</p>
 
<p> 通过在线培训页面展现出实质性进步，并在我们的<a href="index.php?page=contests">在线编程比赛</a>中表现出色的学生，有资格被选为受邀参加USACO夏季<a href="index.php?page=camp">培训营</a>的决赛选手，进一步接受指导，并有可能被考虑为参加国际信息学奥林匹克竞赛（IOI）的美国代表团成员。
</p>
        `)
    }
 
    // 历史页内容
    if(location.search == '?page=history') {
        $('.panel:eq(0)').html(`
<h2>历史</h2>

<p>信息学奥林匹克竞赛（IOI）是高中阶段最负盛名的国际计算机竞赛，始于1989年，由联合国教科文组织（UNESCO）创立，以其他知名的国际高中奥林匹克竞赛为蓝本。1992年，威斯康星大学帕克塞德分校数学教授唐·皮尔（Don Piele）了解到了IOI，并创立了USACO，以便从美国组织一支参加该赛事的队伍。第一个参加1992年IOI的美国队是由国际计算机问题解决大赛中的优秀个人组成的，这个由唐于1981年组织的热门编程比赛。从1993年起，USACO的决赛选手是通过国家竞赛选拔出来，并被邀请参加严格的暑期学术培训营以进一步提高他们的技能。多年来，培训营一直在威斯康星大学帕克塞德分校举办；2005年至2007年在科罗拉多学院举行；2010年之后搬至克莱姆森大学。</p>

<p>在USACO的前20年，唐与总教练罗伯·科尔斯塔德博士以及一支敬业的志愿者团队共同管理了USACO，并有许多前IOI美国队成员参与其中。多年来，罗伯构建了USACO的在线基础设施，使我们能够每年举办多个级别难度的月度比赛，以及最后的US公开赛。与传奇教练哈尔·伯奇合作，罗伯还建立了USACO培训页面，帮助来自全球90个国家的数万名学生学习算法问题解决。唐和罗伯退出USACO的管理后，该组织目前由克莱姆森大学计算机科学教授布赖恩·迪恩博士领导，布赖恩已在USACO工作了20多年。</p>

<p>多年来参加IOI的美国队表现出稳定而持续的提高，美国现在常常在参加IOI的各国中名列前茅。以下是我们过去IOI队成员的名单以及他们在IOI上获得的奖牌。请点击下方以查看特定年份的决赛选手和队伍的更多信息。</p>
        `)
    }
    // 成员页内容
    if(location.search == '?page=staff') {
        $('.panel').html(`
<h2>USACO工作人员</h2>

<p>USACO目前由克莱姆森大学计算机科学教授<a href="https://www.cs.clemson.edu/~bcdean">布赖恩·迪恩</a>博士及一支才华横溢、敬业的志愿教练团队组织，其中大多数是来自顶尖计算机大学的本科生或研究生。我们的前总教练罗布·科尔斯塔德博士仍在组织中担任顾问角色。</p>

<p>以下是2017年USACO培训营的教练团队照片：</p>

<img src="current/images/coaches_2017.jpg" width="100%" border="1px" padding="5px">

<p>从左至右：布赖恩·迪恩（克莱姆森大学）、乔纳森·保尔森（卡耐基梅隆大学/跃动交易公司）、马克·戈登（密歇根大学）、雅各布·斯坦哈特（斯坦福大学）、马特·方丹（中佛罗里达大学）、权权·刘（麻省理工学院）、内森·平斯科（麻省理工学院/谷歌）、丽莎·索罗斯（中佛罗里达大学）、特拉维斯·汉斯（卡耐基梅隆大学）。</p>
        `)
    }
    // 资源页内容
    if(location.search == '?page=resources') {
        $('.panel').html(`

<h2>附加资源和链接</h2>

<p>本页包含了一些可能对我们的参与者有帮助的在线资源。这些链接仅供方便使用；USACO并不官方认可或推广这些网站或程序。</p>

<p><b>新资源：</b>一群专注的前决赛选手组建了一个新的在线培训资源： <a href="https://usaco.guide/">USACO指南</a>。这对于任何想要在USACO中取得成功的人来说，看起来都是一个极佳的网站！

<p><b>学习编程问题解决之前的计算方法。</b>在掌握编程之前，有很多对算法和问题解决方法有很好讲解的资源。其中一个极好的例子是 <a href="https://www.bebras.org">Bebras竞赛</a>，它的问题需要你进行算法思考，但不需要编码。该竞赛在海外取得了巨大成功（有数十万名学生参与），并且最近建立了一个<a href="https://www.bebraschallenge.org">美国版本</a>。此外，你还可以看看<a href="https://csunplugged.org">CS unplugged</a>，这里有另外一组在不需要编程的情况下教授计算机概念的资源。</p>

<p><b>学习编程。</b>现在有很多高质量的在线资源可以帮助你开始学习编程（不一定有USACO那种算法的焦点）。比如 <a href="https://code.org/learn">code.org</a>、<a href="https://techprep.fb.com/">Facebook</a> 和 <a href="https://www.it-ology.org/it-resources/k-12-resources/">IT-ology</a> 都在维护一些很好的资源列表。一些最受欢迎的初学者编程环境是图形化的“基于块的”语言，比如<a href="https://scratch.mit.edu">Scratch</a> 和 <a href="https://appinventor.mit.edu">AppInventor</a>（用于编写Android手机应用程序），你可以通过拖动块来编写程序。另外一些推广讲解初级编程的著名网站包括<a href="https://www.codecademy.com/">Code Academy</a>和<a href="https://www.khanacademy.org/computing/computer-programming">Khan Academy</a>。</p>

<p><b>竞赛编程的书籍。</b>现在有一些专门讲解竞赛编程的书籍，比如Steven和Felix Halim的<a href="https://cpbook.net/">竞赛编程</a>，Steven Skiena和Miguel Revilla的<a href="https://www.amazon.com/Programming-Challenges-Contest-Training-Computer/dp/0387001638">编程挑战</a>，以及一组与波兰奥林匹克相关的作者们写的<a href="https://www.lookingforachallengethebook.com/">寻找挑战</a>。</p>

<p><b>算法的书籍。</b>你可以找到很多通用的算法书籍。一些较为流行的有包括Cormen, Leiserson, Rivest 和 Stein的<a href="https://mitpress.mit.edu/books/introduction-algorithms">算法导论</a>，Kleinberg和Tardos的<a href="https://www.amazon.com/Algorithm-Design-Jon-Kleinberg/dp/0321295358">算法设计</a>，Skiena的<a href="https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1848000693">算法设计手册</a>，以及Sedgewick和Wayne的<a href="https://www.amazon.com/Algorithms-4th-Robert-Sedgewick/dp/032157351X">算法</a>。另外一个最近出版的，在可读性上看起来很有前途的书籍是Daniel Zingaro的 <a href="https://nostarch.com/algorithmic-thinking">Algorithmic Thinking</a>。</p>

<p><b>在线网站/讨论论坛。</b>在线上有许多很好的算法参考资源，比如在<a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">geeksforgeeks.org</a>维护的话题集合，或者在维基百科上。在<a href="https://codeforces.com/blog/entry/23054">这里</a>的CodeForces博客条目中有一个很好的在线参考资源列表。一些前USACO决赛选手还建立了一些有用的网站，包括Riya Arora的<a href="https://vplanetcoding.com/">VPlanetCoding网站</a>和Benjamin Qi的网站<a href="https://github.com/bqi343/USACO">这里</a>。你可以找到很多视频（比如YouTube上的）来讲解怎么解决各种USACO问题，其中很多质量都很高；比如，可以看看我们顶尖选手之一创作的<a href="https://starcoder.org">starcoder.org</a>的内容。</p>

<p><b>问题档案。</b>除了这个站点上提供的练习中的旧USACO问题<a href="index.php?page=contests">这里</a>，你还可以在国际信息学奥林匹克直到2007年的旧问题<a href="https://olympiads.win.tue.nl/ioi/tasks.html">这里</a>找到（IOI目前正在致力于建立更好的存档系统，以便更容易获得其他任务）。其他包含数百个旧问题档案的“在线评测”网站还包括<a href="https://uva.onlinejudge.org/">UVa在线评判</a>，<a href="https://www.spoj.com/">Sphere在线评测</a>和<a href="https://wcipeg.com/">WCIPEG在线评测</a>；这些网站对于练习来说都很不错。</p>

<p><b>其他竞赛。</b>除了USACO和<a href="https://www.ioinformatics.org/index.shtml">国际信息学奥林匹克</a>，还有许多其他很好的算法编程竞赛：
<ul>
<li>世界各地的区域性竞赛，基于IOI的格式。例如<a href="https://ceoi.inf.elte.hu/">中欧信息学奥林匹克（CEOI）</a>、<a href="https://boi2014.tubitak.gov.tr/">巴尔干信息学奥林匹克（BOI）</a>、<a href="https://www.boi2014.lmio.lt/">波罗的海信息学奥林匹克（也被称为BOI）</a>，亚太地区信息学奥林匹克（APIO），和<a href="https://orac.amt.edu.au/fario/">法国澳大利亚区域奥林匹克（FARIO）</a>。
<li>国家性竞赛，通常由各个国家用来选拔他们分别的IOI团队。其中许多提供在线资源或允许任何人参加他们的竞赛进行练习（就像USACO一样）。比如：<a href="https://cemc.math.uwaterloo.ca/contests/computing.html">加拿大</a>、<a href="https://hsin.hr/coci/">克罗地亚</a>、<a href="https://www.olympiad.org.uk/2015/index.html">英国</a>、<a href="https://main.edu.pl/en/archive/oi">波兰</a>。
    <li>美国范围内的区域性编程竞赛。例如 <a href="https://mitit.org">MIT信息学竞赛</a>、<a href="https://hspt.ucfprogrammingteam.org/">中佛罗里达大学高中编程竞赛</a>、<a href="https://cmimc.co/">卡耐基梅隆信息学和数学竞赛</a>、<a href="https://icpc.cs.vt.edu/#/hscontest">弗吉尼亚理工高中编程竞赛</a>、UT Dallas的“Battle of the Brains”编程竞赛，由HP赞助的<a href="https://www.hpcodewars.org/">“CodeWars”</a>竞赛，由<a href="https://pclassic.org">费城大学</a>提供的费城经典竞赛，以及由<a href="https://teamscode.org/">teamscode.org</a>组织的区域和虚拟竞赛。 （这个列表肯定不完整 — 如果你了解其他美国区域编程竞赛，请给<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2a48494e4f4b446a49464f47594544044f4e5f">我们发送邮件</a>让我们包括你竞赛的链接！）
<li>其他一些著名的算法编程竞赛，比如<a href="https://www.acsl.org/">美国计算机科学联盟</a>、<a href="https://icpc.baylor.edu/">ACM国际计算机问题解决竞赛</a>，<a href="https://topcoder.com">Topcoder</a>，<a href="https://codechef.com">CodeChef</a>，<a href="https://codeforces.com">CodeForces</a>和<a href="https://code.google.com/codejam">Google Code Jam</a>。
</ul>
一个维护着活跃和即将到来的在线编程竞赛列表的网站在<a href="https://clist.by/">这里</a>。</p>

<p><b>美国的其他夏令营和课程。</b>在美国的不同地区当然有许多不同的高中学生计算营和课程，但不是所有的都倾向于注重算法问题的解决。一些着重注重算法问题解决的一些显著课程包括：佛罗里达中央大学的面向有意在编程竞赛（如USACO）中脱颖而出的高中生的2周夏季编程培训营（<a href="https://siucf.cs.ucf.edu/programming-competition-overview/">详情</a>）。在加利福尼亚的橘郡地区（也在湾区和在线上），<a href="https://starleague.us/index.php/courses/a-star-computer-sciences">Star
League</a>，在湾区，<a
href="https://alphastar.academy/">Alpha Star Academy</a>，<a href="https://x-camp.academy">X-Camp Academy</a>，<a href="https://www.whizkidzcc.com">WhizKidz Computer Center</a>，<a href="https://ascendankelearning.com/">Ascende Learning</a>，在北弗吉尼亚，<a href="https://www.absoluteacademy.net/">绝对学院</a>提供了基于USACO课程的课程。Prof. Rajiv
Gandhi在普林斯顿大学组织了一个<a href="https://algorithmicthinking.org/">算法思维项目</a>，专门提供给对理论计算机科学感兴趣的高中生。该<a href="https://www.ktbyte.com/">KTBYTE</a>项目也在马萨诸塞提供相关的课程以及在线课程。一个名为“Stem Ivy”的组织提供了一些针对USACO
训练的在线<a href="https://usacocoach.com">课程</a>，以及一家名为<a
href="https://breakoutmentors.com/usaco-competitive-programming-academy/">Breakout Mentors</a>的CS辅导公司也提供USACO特训课程。USACO赞助商<a href="https://easyfuncoding.com">EasyFunCoding</a>提供涵盖入门编程到USACO风格算法问题解决的课程。在得克萨斯州，<a href="https://www.momentumlearning.org">Momentum Learning</a>
提供覆盖USACO概念的课程。在CMU由USACO校友运营的一个新辅导机构，<a href="https://recursivedragon.com">Recursive
Dragon</a>，最近也推出了。</p>

<p><b>美国参与其他国际奥赛。</b>USACO是美国的几个全国组织之一，他们选择学生代表他们参加各自的国际科学奥赛。比较有名的有： <a href="https://amc.maa.org/usamo/usamo.shtml">美国数学奥林匹克（USAMO）</a>、<a href="https://www.aapt.org/physicsteam/program.cfm">US Physics Team</a>、<a href="https://www.acs.org/content/acs/en/education/students/highschool/olympiad.html">美国国家化学奥林匹克（USNCO）</a>，以及<a href="https://www.usabo-trc.org">美国生物奥林匹克（USABO）</a>。</p>
        `);
    }
    // 规则页内容
    if(location.search == '?page=instructions') {
        $('.panel').html(`一般情况下，C 和 C++ 时限 2 秒，Java 和 Python 时限 4 秒，代码长度不超过 100,000 bytes，编译不超过 30 秒，空间限制 256 MB，C 和 C++ 开 O2，Python 开 O 优化\n` + $('.panel').html())
    }
    // 比赛页
    if(location.search == '?page=contests') {
        $('.panel:eq(0)').html($('.panel:eq(0)').html().
                               replaceAll('Previous Contests', '往届比赛').
                               replaceAll('Season', '季度'))
    }
