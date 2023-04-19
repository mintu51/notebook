*WordPress ShortCode*

Normal Post
<?php the_title();?>
<?php the_content();?>	
<?php echo get_the_post_thumbnail_url(); ?>

Custome Post Post
<?php the_field('welcome_title'); ?>
<?php the_field('welcome_text'); ?>
<?php the_field('welcome_img'); ?>
