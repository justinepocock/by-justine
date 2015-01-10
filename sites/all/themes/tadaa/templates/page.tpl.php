<?php
// $Id: page.tpl.php,v 1.1.2.2 2011/01/31 18:02:29 stborchert Exp $
?>  
<header class="header">
  <div id="menu" class="main-menu">
    <?php if ($main_menu): ?>
    <div id="navigation">
      <?php print theme('links__system_main_menu', array('links' => $main_menu, 'attributes' => array('id' => 'main-menu', 'class' => array('links', 'clearfix')))); ?>
      <?php print theme('links__system_secondary_menu', array('links' => $secondary_menu, 'attributes' => array('id' => 'secondary-menu', 'class' => array('links', 'clearfix')))); ?>
      <?php print render($page['header_second']); ?>
    </div> 
    <?php endif; ?>     
  </div>
  <?php print render($page['header']); ?>
  <?php if ($site_name): ?>
  <div id="site-name" class="site-name">
    <h1>
      <a href="<?php print check_url($front_page); ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
    </h1>
  </div>
  <?php endif; ?>
  <div id="site-slogan" class="site-slogan">
    <?php print $site_slogan ?>
  </div>
</header>   
<section class="error-messages"> 
  <?php if ($messages||$page['help']): ?>
  <div id="messages-content">
     <?php print $messages; ?>
    <?php print render($page['help']); ?>
    <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
  </div> 
  <?php endif; ?>
  <div class="clearfix">
</section>
<section class="main clearfix">
  <?php if ($page['strapline']): ?>
    <article class="strapline">
      <?php print render($page['strapline']); ?>
    </article>
  <?php endif; ?>
  <article id="content-area">
    <a id="main-content"></a>
    <div id="tabs-wrapper">
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="with-tabs"><?php print $title ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php if ($tabs): ?>
      <?php print render($tabs); ?>
      <?php endif; ?>
    </div>
    <?php print render($page['content']); ?>
  </article>
</section>
<aside class="aside sidebar_first">
  <?php print render($page['sidebar_first']); ?>
</aside>
<footer  class=" footer clearfix">
  <?php print render($page['footer']); ?>
</footer>

