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
        $('.panel').html(`
<h2> 比赛说明和规则 </h2>

<h3>资格和参与</h3>

<p> 欢迎所有人参加USACO比赛和培训。
仅美国的高中学生有资格被选为USACO培训营的决赛选手
并参加美国国际信息学奥林匹克队的选拔。</p>

所有新参与者都在铜级别开始，那些在当前级别表现特别突出的人将会被提升到下一个级别参加未来的比赛
（提升标准因比赛而异，因为每场比赛都是不同的）。请使用相同的登录ID参加所有比赛，这样我们可以追踪每个人的进步情况。
任何参与都不收取任何费用。</p>

<h3>比赛格式</h3>

<p> 每场比赛通常有3至4道问题，您需要用C、C++、Java或Python提交解决方案程序。问题都是算法性质的，
因此可能需要巧妙的算法和/或数据结构才能正确解决所有测试案例并在时限内完成。您每道问题的得分取决于
您的程序能在时限内解决的输入案例数量（对于大多数比赛，C和C++每个输入案例2秒，Java和Python每个输入案例4秒，
尽管每场比赛或问题可能使用略有不同的限制）。 所有问题陈述都意在直接明了，没有故意的“隐性技巧”
（但请注意，合法但复杂的数据集对测试是公平的）。问题意在具有挑战性；很少有大量参赛者获得接近完美的分数！</p>

<p>比赛通常连续3至5个小时。您可以在较长的比赛窗口内的任何时间段参加比赛。开始比赛时，您的个人计时器开始倒计时，
您将能够通过本网站查看比赛问题并提交解决方案。</p>

<p>当您提交程序时，它将运行对几个评判测试案例，并对每个案例，您将收到反馈显示在彩色方框中：绿色表示正确，红色表示错误。
错误的提交还将根据问题类型进一步区分：X（错误答案），T（超出时间限制），！（运行时错误或内存限制超出），E（空输出文件）
或 M（缺失输出文件）。如果您的程序无法编译，您将看到来自编译器的错误消息。通常第一个测试案例与问题陈述中描述的示例案例相同，
您需要正确解决它，然后您才能获得剩余案例的反馈（尽管在比赛期间未显示它们，您将得到关于您是否解决它们的反馈）。
评委保留在比赛结束后添加或删除测试案例的权利，因此即使您在比赛期间通过了所有案例，测试程序仍是值得的。 </p>

<p> 如果您在比赛期间获得完美分数，您将获得“比赛中”晋升资格； 否则，晋升资格将在比赛结束后授予所有分数高于该比赛晋升门槛的参与者。
如果您获得了比赛中的晋升，您将能够在较长的比赛窗口内的任何时间开始下一场比赛，并获得完整的计时器；也就是说，
您在早些比赛中花费的时间不计入您解决下一场比赛所拥有的时间。</p>

<p>比赛的官方语言是英语，尽管我们尽量提供问题集的几种其他语言的翻译以方便我们的国际参赛者。 如果翻译之间出现分歧，
应将英文版本视为官方版本。</p>

<h3>比赛举办和学术诚信</h3>

<p>USACO非常重视学术诚信，我们已经采用了严格的政策来确保我们比赛的诚信：</p>

<ul>
   <li>独立完成，不得以团队环境进行作业。</li>
   <li>禁止使用生成式人工智能（例如，类似copilot或ChatGPT的服务）。</li>
   <li>美国学生在比赛期间不得使用VPN或相关技术来隐藏其IP地址（即，您的IP地址应该是您学校或家庭互联网服务提供商的地址）。</li>
   <li>与比赛主任之外的人商讨比赛问题是被禁止的。</li>
   <li>比赛期间不得分享任何涉及比赛的技术信息或代码。</li>
   <li>USACO比赛环境旨在模仿国际信息学奥林匹克竞赛的环境，在那里所有代码必须从头编写，您只能查阅描述您编程语言语法或库函数的参考资料。
   因此，您不得使用预先编写的代码或“模板”来提前开始编码，也不能查阅除了提供有关您编程语言基本功能（例如，语法、库函数、输入/输出等）的信息外的任何资源。
   （请注意，此特定规则已于2020年12月进行了更新，以更清晰和略微更严格，因此如果在过去的比赛中您没有严格遵守上述规则，也不必担心。）</li>
   <li>不要使用两个登录ID参加超过一个级别的比赛，也不要使用另一个登录ID阅读问题，以规避比赛时间限制。</li>
   <li>不得提交任何对评分机器行为恶意的代码（即，不要尝试打开网络连接、故意减慢评分机器等）。评判环境会监控活动和系统调用以防止违规行为。
   代码必须通过usaco.org网站的界面提交（即，选择您的文件并单击“提交解决方案”）；不允许通过其他方式提交（例如，试图自动化此过程的脚本）。</li>
</ul>

<p>违反上述任何政策的参与者将被终身禁止参加USACO的所有活动。不要作弊--没有第二次机会！（并且实际上，在USACO比赛中作弊对你没有任何好处；通过诚实尝试解决问题，
您可以学到更多！）我们经常通过与学生的老师或学校校长联系来跟进作弊行为；在过去也已因此导致了开除，因此要知道作弊的后果可能不仅仅局限于USACO的参与。</p>

<h3>一般技术细节</h3>

<ul>
   <li>您的程序文件大小必须小于100,000字节，编译时间不得超过30秒。除非另有说明，您的程序的内存使用将限制在大约256MB左右。
   在评分服务器上出现而在您家中的本地机器上没有出现的“运行时错误”的常见原因是分配了太多内存。</li>
   <li>不要提交打开与当下比赛任务无关的数据文件的程序。只读取问题规定的输入文件，只写入问题规定的输出文件。不要使用“临时”数据文件。</li>
   <li>除非另有说明，程序在性质上必须是确定性的，并且每次使用相同的输入时都能产生相同的答案。不是确定性的程序可能会被取消资格。请注意，基于随机数的程序仍然是可以提交的--它们应该使用固定的种子以使它们每次都得到相同的答案。</li>
   <li>除非另有规定，不能保证所有可能的合法数据集都能在时限内得到完美的解（例如，我们可能提供一个需要接近最优解的任务，并获得部分评分）。在一些问题中（特别是在更高的级别），可能无法使用Python在规定的运行时间内解决所有输入，因为它的速度较慢。我们通常会努力确保所有问题在C/C++/Java中都是可以完全解决的，并且所有铜级别的问题在Python中也是可以完全解决的。</li>
   <li>虽然我们通常设计问题使得数值答案可以适应标准32位整数，但不能保证这一点。如果需要更大的数据类型（例如64位整数），我们通常会在问题陈述中为您方便起见做出说明，但最终您需要意识到何时需要使用这些数据类型。</li>
<li>基本上只由打印语句组成的程序可能会被取消资格。如果在比赛期间为特定测试案例提供了反馈，您不得提交重复的基本上只包含打印语句的程序，以便逆向工程输入。程序必须实际计算所要求的答案，而不仅仅是打印预先计算好的查找表的结果。</li>

<li>程序不得暂停并等待按键。例如，如果您从代码中调用system("pause")，评分环境可能会因为等待不存在的按键而超时，返回类似“空输出文件”的错误。</li>

<li>以前在USACO比赛和我们的培训系统（例如，PROB:和LANG:）中使用的标题不再需要。相反，在提交代码时，请确保从下拉框中选择正确的语言。</li>

<li>对于编译语言，您无需删除所有编译器警告。当然，编译错误会阻止您的提交被评判。</li>

<li>一些程序---特别是在2020年12月比赛之前的大部分任务的解决方案---将从问题说明中命名的文件中读取它们的输入（例如，`cow.in'）。如果您正在使用文件输入，在您的`open'语句中不要指定完整的路径名，只需使用`cow.in'。请注意，文件名区分大小写。如果问题说明称为`cow.in'，那么您必须使用`cow.in'，因为`CoW.In'和'COW.IN'不起作用。一些程序将他们的输出写入到问题说明中命名的文件中（例如，`cow.out'）；在您的`open'语句中不要指定路径名，只需要`cow.out'。与输入文件名类似，输出文件名也区分大小写。如果问题使用文件输入/输出，那么写入到stdout或stderr的输出将不会被评分。请注意，从2020年12月比赛起，输入和输出从基于文件的形式改为基于终端的形式，使用标准输入和标准输出（例如，在C++中使用cin和cout）。问题的输入和输出规范将说明正在使用哪种模式。</li>

<li>几乎每个程序的输出都是以“行”形式。由于这是一个UNIX环境，所有输入/输出文件中的行都以单个换行符“\n”结束，而不是回车加换行符“\r\n”（尽管设计良好的程序通常不应关心使用了哪种约定）。如果您的输出不在每行末尾包含换行符，可能会被判定为不正确。请注意，输入文件和输出文件的最后一行也应以换行符“\n”结尾---这是一个常见的错误来源：如果您在本地测试自己的代码，请确保您的输入文件在最后一行末尾以“\n”结束，特别是如果您正在使用诸如Python等语言中的split("\n")来分隔单独的行。这可能是我们收到的邮件中“在我的系统上可以工作但比赛服务器上不行”的主要原因。</li>

<li>对于一些具有更大输入规模的高级问题，参赛者可能受益于使用快速输入/输出，以更容易地在时限内通过。对于C++用户，如果您使用cin/cout，您可能希望在main方法顶部添加“ios_base::sync_with_stdio(false); cin.tie(0);”。对于Java用户，您可能希望使用BufferedReader而不是Scanner。</li>

<li>特定于Java：我们最近升级为使用Java 8而不是Java 7。两者之间的一个显着差异是在使用string.split方法时分割空字符串“”时的行为，例如如果您想将字符串分割为其各个字符。在Java 7中，这将产生一个其第一个元素始终为空的数组，但在Java 8中不会。因此，如果您重新提交以前在2017年1月或之前提交的Java代码，则可能由于此更改而看到不同的结果。</li>

<li>如果您随着时间的推移为单个问题提交了多个解决方案，只有最后一次提交的解决方案将被评分。这意味着如果您在提交后发现了错误，可以重新提交。重新提交不会受到惩罚（尽管请合理地减少重新提交的频率以减轻服务器的负担）。当然，一旦您的计时器到期，将无法再提交更多解决方案。</li>

<li>裁判有权在评分过程中增加时间限制或增删测试案例以产生最终结果。</li>

<li>裁判的决定是最终的。</li>
</ul>

<h3>特定语言的技术细节</h3>

<ul>
<li>对于<b>C/C++</b>程序员：程序将使用gcc/g++ 7.5.0编译，使用"-O2"优化标志和"-lm"来访问数学库，并使用"-std=c++11"或"-std=c++17"来启用对C++11或C++17的支持。整数的大小为32位；如果需要64位整数，使用"long long"。要使用C风格的I/O（例如scanf, printf）读取或写入一个long long变量，使用"%lld"格式字符串。</li>

<li>对于<b>Java</b>程序员：程序将使用OpenJDK Runtime Environment，版本11.0.10进行编译和执行（我们最近从Java 8升级到Java 11）。您必须在一个文件中提交整个程序，这个文件的名称必须与该文件相同，且必须包含一个具有相同名称的公共类（例如，如果您的文件名为"MyFile.java”，那么它应该包含“public class MyFile"）。这个类需要有您的public static void main函数。文件中的所有其他类都应该在没有"public"标签的情况下定义（例如，作为"class MyOtherClass"）。在您的源代码中不要包含"package"行。</li>

<li>对于<b>Python</b>程序员：我们提供Python 2.7.17和Python 3.6.9；请确保在提交时选择正确的版本，因为通常情况下，为一个版本开发的程序在另一个版本中可能无法正常工作（使用"python --version"检查您的本地Python解释器的版本）。请注意，由于Python速度较慢，我们无法始终保证即使给予Python提交更多的时间限制，也能够解决一些问题的最大测试案例（我们尽最大努力设计比赛，使其对Python程序员可访问，特别是在较低的分区，但是一旦您进入更高的分区，运行时间变得更为关键，您可能最终希望考虑学习一种更快的语言）。执行时会使用"-O"标志来启用一些优化。</li>

<li>请注意，Pascal支持已经停止。</li>
</ul>

<h3>澄清，联系比赛组织者</h3>

<p>如果您发现问题措辞不佳或存在歧义，您可以发送电子邮件给比赛组织者Brian Dean（<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="83e1e0e7e6e2edc3e0efe6eef0ecedade6e7f6">[email&#160;protected]</a>），请求澄清；您可能会收到不超过“仔细阅读问题”回复，尽管具有重要意义的澄清将在比赛页面上发布。</p>

<p>如果您发送比赛邮件至<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6301000706020d23000f060e100c0d4d060716">[email&#160;protected]</a>，请确保主题包含“USACO”一词，并请合理考虑时区---美国东部标准时间（EST）的白天才会有回复。</p>
        `)
    }
    // 比赛页
    if(location.search == '?page=contests') {
        $('.panel:eq(0)').html($('.panel:eq(0)').html().
                               replaceAll('Previous Contests', '往届比赛').
                               replaceAll('Season', '季度'))
    }
