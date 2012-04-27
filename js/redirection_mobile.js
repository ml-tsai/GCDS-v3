


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>JS-Redirection-Mobile-Site/redirection_mobile.js at master · sebarmeli/JS-Redirection-Mobile-Site</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="m5YCkp5XTNm7FxXmN5WpJHvT4LjV3EoRMk1TmT65Bp8=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-9e6f49288d62ba4c519541a22d681e2f823f02b4.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github2-1a2061c33e6632ce3bbf40295fe45208a5459e3c.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/jquery-2d0d4e0119675485f7a3d0dd7f49420b63c552ae.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-cfac289827b3ed9a195af1fc6531b5a5c5ca2cbe.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/sebarmeli/JS-Redirection-Mobile-Site/blob/3e42b4e5a93d5cf39dcd1339e947c89d45741a21/redirection_mobile.js'>
    <meta property="og:title" content="JS-Redirection-Mobile-Site"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/sebarmeli/JS-Redirection-Mobile-Site"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1329275881"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="JS-Redirection-Mobile-Site - JS to handle the redirection to the mobile version of your site"/>

    <meta name="description" content="JS-Redirection-Mobile-Site - JS to handle the redirection to the mobile version of your site" />
  <link href="https://github.com/sebarmeli/JS-Redirection-Mobile-Site/commits/master.atom" rel="alternate" title="Recent Commits to JS-Redirection-Mobile-Site:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob  vis-public env-production " data-blob-contribs-enabled="yes">
    <div id="wrapper">

    
    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/organizations/gc-designstudio">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1323882728" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1324325369" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1323882728" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1324325369" />
          </a>

              
    <div class="topsearch ">
<form accept-charset="UTF-8" action="/search" id="top_search_form" method="get"><input name="utf8" type="hidden" value="&#x2713;" />        <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search"><span class="mini-icon advanced-search"></span></a>
        <div class="search placeholder-field js-placeholder-field">
          <label class="placeholder" for="global-search-field">Search…</label>
          <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" spellcheck="false" autocomplete="off" data-autocomplete="my-repos-autocomplete">
          <div id="my-repos-autocomplete" class="autocomplete-results">
            <ul class="js-navigation-container"></ul>
          </div>
          <input type="submit" value="Search" class="button">
          <span class="mini-icon search-input"></span>
        </div>
        <input type="hidden" name="type" value="Everything" />
        <input type="hidden" name="repo" value="" />
        <input type="hidden" name="langOverride" value="" />
        <input type="hidden" name="start_value" value="1" />
</form>      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/ml-tsai"><img height="20" src="https://secure.gravatar.com/avatar/bd6c0f605f19c676516a9f80f8f280b7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
      <a href="https://github.com/ml-tsai" class="name">ml-tsai</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon new-repo"></span></a>
      </li>
      <li>
        <a href="/inbox/notifications" id="notifications" class="tooltipped downwards" title="Notifications">
          <span class="mini-icon notifications"></span>
          <span class="unread_count">38</span>
        </a>
      </li>
      <li><a href="/settings/profile" id="settings" class="tooltipped downwards" title="Account Settings"><span class="mini-icon account-settings"></span></a></li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Log Out"><span class="mini-icon logout"></span></a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">


          <li class="js-toggler-container watch-button-container ">
            <a href="/sebarmeli/JS-Redirection-Mobile-Site/toggle_watch" class="minibutton btn-watch watch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Watch</span></a>
            <a href="/sebarmeli/JS-Redirection-Mobile-Site/toggle_watch" class="minibutton btn-watch unwatch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Unwatch</span></a>
          </li>

              <li><a href="/sebarmeli/JS-Redirection-Mobile-Site/fork_select" class="minibutton btn-fork " rel="facebox nofollow"><span><span class="icon"></span>Fork</span></a></li>



      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers ">
            <a href="/sebarmeli/JS-Redirection-Mobile-Site/watchers" title="Watchers" class="tooltipped downwards">
              147
            </a>
          </li>
          <li class="forks">
            <a href="/sebarmeli/JS-Redirection-Mobile-Site/network" title="Forks" class="tooltipped downwards">
              26
            </a>
          </li>
        </ul>
      </li>
    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title">
            <span class="mini-icon public-repo"></span>
            <span class="author vcard">
<a href="/sebarmeli" class="url fn" itemprop="url" rel="author">              <span itemprop="title">sebarmeli</span>
              </a></span> /
            <strong><a href="/sebarmeli/JS-Redirection-Mobile-Site" class="js-current-repository">JS-Redirection-Mobile-Site</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/sebarmeli/JS-Redirection-Mobile-Site" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/sebarmeli/JS-Redirection-Mobile-Site/network" highlight="repo_network">Network</a>
    <li><a href="/sebarmeli/JS-Redirection-Mobile-Site/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/sebarmeli/JS-Redirection-Mobile-Site/issues" highlight="repo_issues">Issues <span class='counter'>4</span></a></li>

      <li><a href="/sebarmeli/JS-Redirection-Mobile-Site/wiki" highlight="repo_wiki">Wiki <span class='counter'>1</span></a></li>

    <li><a href="/sebarmeli/JS-Redirection-Mobile-Site/graphs" highlight="repo_graphsrepo_contributors">Stats &amp; Graphs</a></li>

  </ul>
 
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/sebarmeli/JS-Redirection-Mobile-Site/tree-list/3e42b4e5a93d5cf39dcd1339e947c89d45741a21"
      data-blob-url-prefix="/sebarmeli/JS-Redirection-Mobile-Site/blob/3e42b4e5a93d5cf39dcd1339e947c89d45741a21"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/sebarmeli/JS-Redirection-Mobile-Site">JS-Redirection-Mobile-Site</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/sebarmeli/JS-Redirection-Mobile-Site/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input name="utf8" type="hidden" value="&#x2713;" />
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/sebarmeli/JS-Redirection-Mobile-Site/tags" class="blank" highlight="repo_tags">Tags <span class="counter">0</span></a></li>
    <li><a href="/sebarmeli/JS-Redirection-Mobile-Site/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-master-branch="master"
           data-ref="master">
          <span><span class="icon"></span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"></a>
          <div class="context-title">Switch Branches/Tags</div>
          <div class="context-body pane-selector commitish-selector js-filterable-commitishes">
            <div class="filterbar">
              <div class="placeholder-field js-placeholder-field">
                <label class="placeholder" for="context-commitish-filter-field" data-placeholder-mode="sticky">Filter branches/tags</label>
                <input type="text" id="context-commitish-filter-field" class="commitish-filter" />
              </div>

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

              <div class="commitish-item branch-commitish selector-item">
                <h4>
                    <a href="/sebarmeli/JS-Redirection-Mobile-Site/blob/master/redirection_mobile.js" data-name="master" rel="nofollow">master</a>
                </h4>
              </div>


            <div class="no-results" style="display:none">Nothing to show</div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/sebarmeli/JS-Redirection-Mobile-Site" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/sebarmeli/JS-Redirection-Mobile-Site/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/sebarmeli/JS-Redirection-Mobile-Site/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">1</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        





<!-- block_view_fragment_key: views7/v8/blob:v21:d5c5b4d09013667e85ed0341d583d282 -->
  <div id="slider">

    <div class="breadcrumb" data-path="redirection_mobile.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sebarmeli/JS-Redirection-Mobile-Site/tree/3e42b4e5a93d5cf39dcd1339e947c89d45741a21" class="js-rewrite-sha" itemprop="url"><span itemprop="title">JS-Redirection-Mobile-Site</span></a></b> / <strong class="final-path">redirection_mobile.js</strong> <span class="js-clippy mini-icon clippy " data-clipboard-text="redirection_mobile.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>


      <div class="commit file-history-tease" data-path="redirection_mobile.js/">
        <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/a32ee5b05bff6b42a3dd62b5732065f8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
        <span class="author"><a href="/sebarmeli">sebarmeli</a></span>
        <time class="js-relative-date" datetime="2011-07-25T01:20:26-07:00" title="2011-07-25 01:20:26">July 25, 2011</time>
        <div class="commit-title">
            <a href="/sebarmeli/JS-Redirection-Mobile-Site/commit/3e42b4e5a93d5cf39dcd1339e947c89d45741a21" class="message">version 0.9.5 released. Support for tablet_url</a>
        </div>

        <div class="participation">
          <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
          
        </div>
        <div id="blob_contributors_box" style="display:none">
          <h2>Users on GitHub who have contributed to this file</h2>
          <ul class="facebox-user-list">
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/a32ee5b05bff6b42a3dd62b5732065f8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/sebarmeli">sebarmeli</a>
            </li>
          </ul>
        </div>
      </div>

    <div class="frames">
      <div class="frame frame-center" data-path="redirection_mobile.js/" data-permalink-url="/sebarmeli/JS-Redirection-Mobile-Site/blob/3e42b4e5a93d5cf39dcd1339e947c89d45741a21/redirection_mobile.js" data-title="JS-Redirection-Mobile-Site/redirection_mobile.js at master · sebarmeli/JS-Redirection-Mobile-Site · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon text-file"></b></span>
                <span class="mode" title="File Mode">100755</span>
                  <span>233 lines (189 sloc)</span>
                <span>9.309 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/sebarmeli/JS-Redirection-Mobile-Site/edit/3e42b4e5a93d5cf39dcd1339e947c89d45741a21/redirection_mobile.js" data-method="post" rel="nofollow"><span>Edit this file</span></a>
                  </li>

                <li>
                  <a href="/sebarmeli/JS-Redirection-Mobile-Site/raw/master/redirection_mobile.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url"><span><span class="icon"></span>Raw</span></a>
                </li>
                  <li>
                    <a href="/sebarmeli/JS-Redirection-Mobile-Site/blame/master/redirection_mobile.js" class="minibutton btn-blame grouped-button bigger lighter"><span><span class="icon"></span>Blame</span></a>
                  </li>
                <li>
                  <a href="/sebarmeli/JS-Redirection-Mobile-Site/commits/master/redirection_mobile.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow"><span><span class="icon"></span>History</span></a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm">* JS Redirection Mobile</span></div><div class='line' id='LC3'><span class="cm">*</span></div><div class='line' id='LC4'><span class="cm">* Developed by</span></div><div class='line' id='LC5'><span class="cm">* Sebastiano Armeli-Battana (@sebarmeli) - http://www.sebastianoarmelibattana.com</span></div><div class='line' id='LC6'><span class="cm">* Dual licensed under the MIT or GPL Version 3 licenses.</span></div><div class='line' id='LC7'><span class="cm">*/</span></div><div class='line' id='LC8'><span class="cm">/*</span></div><div class='line' id='LC9'><span class="cm">	Copyright (c) 2011 Sebastiano Armeli-Battana (http://www.sebastianoarmelibattana.com)</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'><span class="cm">	This program is free software: you can redistribute it and/or modify</span></div><div class='line' id='LC12'><span class="cm">	it under the terms of the GNU General Public License as published by</span></div><div class='line' id='LC13'><span class="cm">	the Free Software Foundation, either version 3 of the License, or</span></div><div class='line' id='LC14'><span class="cm">	(at your option) any later version.</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'><span class="cm">	This program is distributed in the hope that it will be useful,</span></div><div class='line' id='LC17'><span class="cm">	but WITHOUT ANY WARRANTY; without even the implied warranty of</span></div><div class='line' id='LC18'><span class="cm">	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the</span></div><div class='line' id='LC19'><span class="cm">	GNU General Public License for more details.</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'><span class="cm">	You should have received a copy of the GNU General Public License</span></div><div class='line' id='LC22'><span class="cm">	along with this program.  If not, see &lt;http://www.gnu.org/licenses/&gt;.</span></div><div class='line' id='LC23'><span class="cm">*/</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><span class="cm">/*</span></div><div class='line' id='LC26'><span class="cm">* This script will cover a basic scenario of full JS mobile redirection.</span></div><div class='line' id='LC27'><span class="cm">* The user will be redirected to the mobile version of the site (home page)</span></div><div class='line' id='LC28'><span class="cm">* if it&#39;s trying to access the site from a mobile device. This check is</span></div><div class='line' id='LC29'><span class="cm">* mainly done checking the User-Agent string. </span></div><div class='line' id='LC30'><span class="cm">* The mobile URL will be obtained appending a prefix (default is &quot;m&quot;) to </span></div><div class='line' id='LC31'><span class="cm">* the hostname of the current URL. It&#39;s used a naked domain to avoid conflict with</span></div><div class='line' id='LC32'><span class="cm">* www.</span></div><div class='line' id='LC33'><span class="cm">* </span></div><div class='line' id='LC34'><span class="cm">* In some cases the user needs to be redirected to the Desktop version of the site </span></div><div class='line' id='LC35'><span class="cm">* from a mobile device. This happens when the user clicks on a link such as &quot;Go to full site&quot;</span></div><div class='line' id='LC36'><span class="cm">* or when there is a specific parameter in the querystring.</span></div><div class='line' id='LC37'><span class="cm">*</span></div><div class='line' id='LC38'><span class="cm">* In that case a new key/value in sessionStorage (for modern browsers) </span></div><div class='line' id='LC39'><span class="cm">* will be set and until the user doesn&#39;t close browser window or tab it will access</span></div><div class='line' id='LC40'><span class="cm">* to the desktop version from a mobile device. There is a fallback for old browsers that</span></div><div class='line' id='LC41'><span class="cm">* don&#39;t support sessionStorage, and it will use a cookie. The cookie will expiry in one hour </span></div><div class='line' id='LC42'><span class="cm">* (default value) or you configure the expiry time.</span></div><div class='line' id='LC43'><span class="cm">* </span></div><div class='line' id='LC44'><span class="cm">* To use this function, you need to call it as SA.redirection_mobile(config);</span></div><div class='line' id='LC45'><span class="cm">* E.g. SA.redirection_mobile ({noredirection_param : &quot;noredirection&quot;, mobile_prefix : &quot;mobile&quot;, cookie_hours : &quot;2&quot; })</span></div><div class='line' id='LC46'><span class="cm">* or</span></div><div class='line' id='LC47'><span class="cm">* E.g. SA.redirection_mobile ({mobile_url : &quot;mobile.whatever.com/example&quot;, mobile_sheme : &quot;https&quot; })</span></div><div class='line' id='LC48'><span class="cm">* or</span></div><div class='line' id='LC49'><span class="cm">* E.g. SA.redirection_mobile ({mobile_prefix : &quot;mobile&quot;})</span></div><div class='line' id='LC50'><span class="cm">* or</span></div><div class='line' id='LC51'><span class="cm">* E.g. SA.redirection_mobile ({mobile_prefix : &quot;mobile&quot;, mobile_scheme : &quot;https&quot;, redirection_paramName : &quot;modile_redirect&quot;})</span></div><div class='line' id='LC52'><span class="cm">* or</span></div><div class='line' id='LC53'><span class="cm">* E.g. SA.redirection_mobile ({mobile_url : &quot;mobile.whatever.com/example&quot;, tablet_redirection : &quot;true&quot;})</span></div><div class='line' id='LC54'><span class="cm">* or</span></div><div class='line' id='LC55'><span class="cm">* E.g. SA.redirection_mobile ({{mobile_url : &quot;mobile.whatever.com/example&quot;, beforeredirection_callback : (function(){alert(&#39;2&#39;)}) }})</span></div><div class='line' id='LC56'><span class="cm">* or</span></div><div class='line' id='LC57'><span class="cm">* E.g. SA.redirection_mobile ({{mobile_url : &quot;mobile.whatever.com&quot;, tablet_url : &quot;tablet.whatever.com&quot;)</span></div><div class='line' id='LC58'><span class="cm">*</span></div><div class='line' id='LC59'><span class="cm">*</span></div><div class='line' id='LC60'><span class="cm">* @link http://github.com/sebarmeli/JS-Redirection-Mobile-Site/</span></div><div class='line' id='LC61'><span class="cm">* @author Sebastiano Armeli-Battana</span></div><div class='line' id='LC62'><span class="cm">* @version 0.9.5</span></div><div class='line' id='LC63'><span class="cm">* @date 25/07/2011 </span></div><div class='line' id='LC64'><span class="cm">* </span></div><div class='line' id='LC65'><span class="cm">*/</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'><span class="cm">/*globals window,document, navigator, SA */</span></div><div class='line' id='LC68'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">SA</span><span class="p">)</span> <span class="p">{</span><span class="nb">window</span><span class="p">.</span><span class="nx">SA</span> <span class="o">=</span> <span class="p">{};}</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'><span class="cm">/*</span></div><div class='line' id='LC71'><span class="cm">* @param configuration object containing three properties:</span></div><div class='line' id='LC72'><span class="cm">*			- mobile_prefix : prefix appended to the hostname (such as &quot;m&quot; to redirect to &quot;m.domain.com&quot;)</span></div><div class='line' id='LC73'><span class="cm">*			- mobile_url : mobile url to use for the redirection (such as &quot;mobile.whatever.com&quot; to redirect to &quot;whatever.com&quot; )</span></div><div class='line' id='LC74'><span class="cm">*			- mobile_scheme : url scheme (http/https) of the mobile site domain</span></div><div class='line' id='LC75'><span class="cm">*			- cookie_hours : number of hours the cookie needs to exist after redirection to desktop site</span></div><div class='line' id='LC76'><span class="cm">*			- noredirection_param : parameter to pass in the querystring of the URL to avoid the redirection (the value must be equal to &quot;true&quot;).</span></div><div class='line' id='LC77'><span class="cm">*				It&#39;s also the name of the item in the localStorage (or cookie name) to avoid mobile</span></div><div class='line' id='LC78'><span class="cm">*				redirection. Default value is &quot;noredirection&quot;. Eg: http://domain.com?noredirection=true</span></div><div class='line' id='LC79'><span class="cm">*			- tablet_redirection : boolean value that enables/disables(default) the redirection for tablet such as iPad, Samsung Galaxy Tab, Kindle or Motorola Xoom. - Default:false</span></div><div class='line' id='LC80'><span class="cm">*				Default Url for redirection will be the same as the one for mobile devices.</span></div><div class='line' id='LC81'><span class="cm">*			- tablet_url : url to use for the redirection in case user is using a tablet to access the site</span></div><div class='line' id='LC82'><span class="cm">*			- keep_path : boolean to determine if the destination url needs to keep the path from the original url</span></div><div class='line' id='LC83'><span class="cm">*			- keep_query : boolean to determine if the destination url needs to keep the querystring from the original url</span></div><div class='line' id='LC84'><span class="cm">*			- beforeredirection_callback : callback launched before the redirection happens</span></div><div class='line' id='LC85'><span class="cm">*/</span></div><div class='line' id='LC86'><span class="nx">SA</span><span class="p">.</span><span class="nx">redirection_mobile</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">configuration</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>	<span class="c1">// Helper function for adding time to the current date</span></div><div class='line' id='LC89'>	<span class="kd">var</span> <span class="nx">addTimeToDate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">msec</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'>		<span class="c1">// Get the current date</span></div><div class='line' id='LC92'>		<span class="kd">var</span> <span class="nx">exdate</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>		<span class="c1">// Add time to the date</span></div><div class='line' id='LC95'>		<span class="nx">exdate</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="nx">exdate</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">+</span> <span class="nx">msec</span><span class="p">);</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>		<span class="c1">//Return the new Date</span></div><div class='line' id='LC98'>		<span class="k">return</span> <span class="nx">exdate</span><span class="p">;</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>	<span class="p">};</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>	<span class="c1">// Helper function for getting a value from a parameter in the querystring</span></div><div class='line' id='LC103'>	<span class="kd">var</span> <span class="nx">getQueryValue</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC106'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC107'>		<span class="p">}</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>		<span class="kd">var</span> <span class="nx">querystring</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">search</span><span class="p">,</span></div><div class='line' id='LC110'>			<span class="nx">queryStringArray</span> <span class="o">=</span> <span class="nx">querystring</span> <span class="o">&amp;&amp;</span> <span class="nx">querystring</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;&amp;&quot;</span><span class="p">),</span></div><div class='line' id='LC111'>			<span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC112'>			<span class="nx">length</span> <span class="o">=</span> <span class="nx">queryStringArray</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'>		<span class="k">for</span> <span class="p">(;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>			<span class="kd">var</span> <span class="nx">token</span> <span class="o">=</span> <span class="nx">queryStringArray</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span></div><div class='line' id='LC116'>				<span class="nx">firstPart</span> <span class="o">=</span> <span class="nx">token</span> <span class="o">&amp;&amp;</span> <span class="nx">token</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">token</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;=&quot;</span><span class="p">));</span></div><div class='line' id='LC117'>			<span class="k">if</span> <span class="p">(</span><span class="nx">firstPart</span> <span class="o">===</span> <span class="nx">param</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC118'>				<span class="k">return</span> <span class="nx">token</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">token</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;=&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">token</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC119'>			<span class="p">}</span></div><div class='line' id='LC120'>		<span class="p">}</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>	<span class="p">};</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>	<span class="c1">// Retrieve the User Agent of the browser</span></div><div class='line' id='LC125'>	<span class="kd">var</span> <span class="nx">agent</span> <span class="o">=</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>		<span class="c1">// Constants</span></div><div class='line' id='LC128'>		<span class="nx">FALSE</span> <span class="o">=</span> <span class="s2">&quot;false&quot;</span><span class="p">,</span></div><div class='line' id='LC129'>		<span class="nx">TRUE</span> <span class="o">=</span> <span class="s2">&quot;true&quot;</span><span class="p">,</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>		<span class="c1">// configuration object</span></div><div class='line' id='LC132'>		<span class="nx">config</span> <span class="o">=</span> <span class="nx">configuration</span> <span class="o">||</span> <span class="p">{},</span></div><div class='line' id='LC133'><br/></div><div class='line' id='LC134'>		<span class="c1">// parameter to pass in the URL to avoid the redirection</span></div><div class='line' id='LC135'>		<span class="nx">redirection_param</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">noredirection_param</span> <span class="o">||</span> <span class="s2">&quot;noredirection&quot;</span><span class="p">,</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'>		<span class="c1">// prefix appended to the hostname</span></div><div class='line' id='LC138'>		<span class="nx">mobile_prefix</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">mobile_prefix</span> <span class="o">||</span> <span class="s2">&quot;m&quot;</span><span class="p">,</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'>		<span class="c1">// new url for the mobile site domain </span></div><div class='line' id='LC141'>		<span class="nx">mobile_url</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">mobile_url</span><span class="p">,</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>		<span class="c1">// protocol for the mobile site domain </span></div><div class='line' id='LC144'>		<span class="nx">mobile_protocol</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">mobile_scheme</span> <span class="o">?</span></div><div class='line' id='LC145'>			<span class="nx">config</span><span class="p">.</span><span class="nx">mobile_scheme</span> <span class="o">+</span> <span class="s2">&quot;:&quot;</span> <span class="o">:</span></div><div class='line' id='LC146'>				<span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="p">,</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'>		<span class="c1">// URL host of incoming request</span></div><div class='line' id='LC149'>		<span class="nx">host</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">host</span><span class="p">,</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>		<span class="c1">// value for the parameter passed in the URL to avoid the redirection</span></div><div class='line' id='LC152'>		<span class="nx">queryValue</span> <span class="o">=</span> <span class="nx">getQueryValue</span><span class="p">(</span><span class="nx">redirection_param</span><span class="p">),</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>		<span class="c1">// Compose the mobile hostname considering &quot;mobile_url&quot; or &quot;mobile_prefix&quot; + hostname</span></div><div class='line' id='LC155'>		<span class="nx">mobile_host</span> <span class="o">=</span> <span class="nx">mobile_url</span> <span class="o">||</span></div><div class='line' id='LC156'>			<span class="p">(</span><span class="nx">mobile_prefix</span> <span class="o">+</span> <span class="s2">&quot;.&quot;</span> <span class="o">+</span> </div><div class='line' id='LC157'>				<span class="p">(</span><span class="o">!!</span><span class="nx">host</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^www\./i</span><span class="p">)</span> <span class="o">?</span></div><div class='line' id='LC158'>					<span class="nx">host</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">4</span><span class="p">)</span> <span class="o">:</span> </div><div class='line' id='LC159'>						<span class="nx">host</span><span class="p">)),</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>		<span class="c1">// Expiry hours for cookie</span></div><div class='line' id='LC162'>		<span class="nx">cookie_hours</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">cookie_hours</span> <span class="o">||</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC163'><br/></div><div class='line' id='LC164'>		<span class="c1">// Parameters to determine if the pathname and the querystring need to be kept</span></div><div class='line' id='LC165'>		<span class="nx">keep_path</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">keep_path</span> <span class="o">||</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC166'>		<span class="nx">keep_query</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">keep_query</span> <span class="o">||</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>		<span class="c1">// new url for the tablet site domain </span></div><div class='line' id='LC169'>		<span class="nx">tablet_host</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">tablet_url</span> <span class="o">||</span> <span class="nx">mobile_host</span><span class="p">,</span></div><div class='line' id='LC170'><br/></div><div class='line' id='LC171'>		<span class="c1">// Check if the UA is a mobile one (iphone, ipod, android, blackberry)</span></div><div class='line' id='LC172'>		<span class="nx">isUAMobile</span> <span class="o">=!!</span><span class="p">(</span><span class="nx">agent</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/(iPhone|iPod|blackberry|android 0.5|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i</span><span class="p">));</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>	<span class="c1">// Check if the referrer was a mobile page (probably the user clicked &quot;Go to full site&quot;) or in the </span></div><div class='line' id='LC176'>	<span class="c1">// querystring there is a parameter to avoid the redirection such as &quot;?mobile_redirect=false&quot;</span></div><div class='line' id='LC177'>	<span class="c1">// (in that case we need to set a variable in the sessionStorage or in the cookie)</span></div><div class='line' id='LC178'>	<span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">referrer</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">mobile_host</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">queryValue</span> <span class="o">===</span> <span class="nx">TRUE</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>		<span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">sessionStorage</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>			<span class="nb">window</span><span class="p">.</span><span class="nx">sessionStorage</span><span class="p">.</span><span class="nx">setItem</span><span class="p">(</span><span class="nx">redirection_param</span><span class="p">,</span> <span class="nx">TRUE</span><span class="p">);</span></div><div class='line' id='LC182'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC183'>			<span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span> <span class="o">=</span> <span class="nx">redirection_param</span> <span class="o">+</span> <span class="s2">&quot;=&quot;</span> <span class="o">+</span> <span class="nx">TRUE</span> <span class="o">+</span> <span class="s2">&quot;;expires=&quot;</span><span class="o">+</span></div><div class='line' id='LC184'>				<span class="nx">addTimeToDate</span><span class="p">(</span><span class="mi">3600</span><span class="o">*</span><span class="mi">1000</span><span class="o">*</span><span class="nx">cookie_hours</span><span class="p">).</span><span class="nx">toUTCString</span><span class="p">();</span></div><div class='line' id='LC185'>		<span class="p">}</span></div><div class='line' id='LC186'>	<span class="p">}</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>	<span class="c1">// Check if the sessionStorage contain the parameter</span></div><div class='line' id='LC189'>	<span class="kd">var</span> <span class="nx">isSessionStorage</span> <span class="o">=</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">sessionStorage</span><span class="p">)</span> <span class="o">?</span> </div><div class='line' id='LC190'>			<span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">sessionStorage</span><span class="p">.</span><span class="nx">getItem</span><span class="p">(</span><span class="nx">redirection_param</span><span class="p">)</span> <span class="o">===</span> <span class="nx">TRUE</span><span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC191'>				<span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>		<span class="c1">// Check if the Cookie has been set up</span></div><div class='line' id='LC194'>		<span class="nx">isCookieSet</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span> <span class="o">?</span> </div><div class='line' id='LC195'>			<span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">redirection_param</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC196'>				<span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>	<span class="c1">// Check if the device is a Tablet such as iPad, Samsung Tab, Motorola Xoom or Amazon Kindle</span></div><div class='line' id='LC199'>	<span class="k">if</span> <span class="p">(</span><span class="o">!!</span><span class="p">(</span><span class="nx">agent</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/(iPad|SCH-I800|xoom|kindle)/i</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'>		<span class="c1">// Check if the redirection needs to happen for iPad</span></div><div class='line' id='LC202'>		<span class="kd">var</span> <span class="nx">isUATablet</span> <span class="o">=</span> <span class="p">(</span><span class="nx">config</span><span class="p">.</span><span class="nx">tablet_redirection</span> <span class="o">===</span> <span class="nx">TRUE</span> <span class="o">||</span> <span class="o">!!</span><span class="nx">config</span><span class="p">.</span><span class="nx">tablet_url</span><span class="p">)</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC203'>		<span class="nx">isUAMobile</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC204'>	<span class="p">}</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'>	<span class="c1">// Check that User Agent is mobile, cookie is not set or value in the sessionStorage not present</span></div><div class='line' id='LC207'>	<span class="k">if</span> <span class="p">((</span><span class="nx">isUATablet</span> <span class="o">||</span> <span class="nx">isUAMobile</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">isCookieSet</span> <span class="o">||</span> <span class="nx">isSessionStorage</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>		<span class="c1">// Callback call</span></div><div class='line' id='LC210'>		<span class="k">if</span> <span class="p">(</span><span class="nx">config</span><span class="p">.</span><span class="nx">beforeredirection_callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC211'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">config</span><span class="p">.</span><span class="nx">beforeredirection_callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC212'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC213'>			<span class="p">}</span></div><div class='line' id='LC214'>		<span class="p">}</span></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'>		<span class="kd">var</span> <span class="nx">path_query</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'>		<span class="k">if</span><span class="p">(</span><span class="nx">keep_path</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC219'>			<span class="nx">path_query</span> <span class="o">+=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">pathname</span><span class="p">;</span></div><div class='line' id='LC220'>		<span class="p">}</span></div><div class='line' id='LC221'><br/></div><div class='line' id='LC222'>		<span class="k">if</span> <span class="p">(</span><span class="nx">keep_query</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC223'>			<span class="nx">path_query</span> <span class="o">+=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">search</span><span class="p">;</span></div><div class='line' id='LC224'>		<span class="p">}</span></div><div class='line' id='LC225'><br/></div><div class='line' id='LC226'>		<span class="k">if</span> <span class="p">(</span><span class="nx">isUATablet</span><span class="p">){</span></div><div class='line' id='LC227'>			<span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">mobile_protocol</span> <span class="o">+</span> <span class="s2">&quot;//&quot;</span> <span class="o">+</span> <span class="nx">tablet_host</span> <span class="o">+</span> <span class="nx">path_query</span><span class="p">;</span></div><div class='line' id='LC228'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">isUAMobile</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC229'>			<span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">mobile_protocol</span> <span class="o">+</span> <span class="s2">&quot;//&quot;</span> <span class="o">+</span> <span class="nx">mobile_host</span> <span class="o">+</span> <span class="nx">path_query</span><span class="p">;</span></div><div class='line' id='LC230'>		<span class="p">}</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'>	<span class="p">}</span> </div><div class='line' id='LC233'><span class="p">};</span>	</div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/sebarmeli/JS-Redirection-Mobile-Site/tree-list/3e42b4e5a93d5cf39dcd1339e947c89d45741a21" data-blob-url-prefix="/sebarmeli/JS-Redirection-Mobile-Site/blob/3e42b4e5a93d5cf39dcd1339e947c89d45741a21">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329872004" height="64" width="64">
</div>

      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Analyze web traffic</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.06606s from fe7.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspaces_logo.png?1329521039" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div class="ajax-error-message">
      <p><span class="icon"></span> Something went wrong with that request. Please try again. <a href="javascript:;" class="ajax-error-dismiss">Dismiss</a></p>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1310086001" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download"><span><span class="icon"></span>Download</span></a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1310086001" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download"><span><span class="icon"></span>Download</span></a>
        </li>
      </ul>
    </div>

    
    
    
    <span id='server_response_time' data-time='0.06845' data-host='fe7'></span>
  </body>
</html>

