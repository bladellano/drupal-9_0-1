<?php

namespace Drupal\points_on_xingu_maps\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\points_on_xingu_maps\Controller\MapBlockController;

/**
 * Provides an example block.
 *
 * @Block(
 *   id = "points_on_xingu_maps",
 *   admin_label = @Translation("Map Block"),
 *   category = @Translation("Points on Xingu Maps")
 * )
 */
class MapBlock extends BlockBase
{

  /**
   * {@inheritdoc}
   */
  public function build()
  {

    $pointsOnXinguMaps = new MapBlockController;

    $items = $pointsOnXinguMaps->getPoints();

    return [
      '#theme' => 'basic_map_block',
      '#items' => $items,
      '#attached' => [
        'library' => [
          'points_on_xingu_maps/global-assets',
        ],
      ],
    ];
  }
}
