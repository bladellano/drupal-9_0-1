<?php

namespace Drupal\helloworld\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\helloworld\Controller\ApiController;

/**
 * Provides a helloworld block.
 *
 * @Block(
 *   id = "helloworld_helloworld",
 *   admin_label = @Translation("HelloWorld"),
 *   category = @Translation("Custom block for hello world")
 * )
 */
class HelloWorldBlock extends BlockBase
{

  /**
   * {@inheritdoc}
   */
  public function build()
  {

    $catFactObj = new ApiController;

    return [
      '#type' => 'markup',
      '#markup' => $catFactObj->getFact(),
      '#cache' => [
        'max-age' => 0
      ]
    ];
  }
}
