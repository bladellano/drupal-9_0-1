<?php

namespace Drupal\helloworld\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for HelloWorld routes.
 */
class HelloworldController extends ControllerBase
{

  /**
   * Builds the response.
   */
  public function message()
  {

    return  [
      '#markup' => $this->t('Hello World message from custom module')
    ];

  }
}
