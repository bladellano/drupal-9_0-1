<?php

namespace Drupal\points_on_xingu_maps\Controller;

use Drupal\Core\Url;
use Drupal\node\Entity\NodeType;
use Drupal\Core\Controller\ControllerBase;

class MapBlockController extends ControllerBase
{

    public function getPoints(): array
    {
        $nodeTypes = NodeType::load('members');

        $entityTypeManager = \Drupal::service('entity_type.manager');

        $getFieldDefinitions = \Drupal::service('entity_field.manager')
            ->getFieldDefinitions('node', $nodeTypes->id());

        if (!isset($getFieldDefinitions['field_geolocation']))
            return [];

        $items = $entityTypeManager
            ->getStorage('node')
            ->loadByProperties(['type' => $nodeTypes->id()]);

        $points = [];

        foreach ($items as $item) :

            $g = array_map(function ($i) {
                $c = array_values($i);
                return current($c);
            }, $item->field_geolocation->getValue());

            $points[$item->id()] = [
                'name' => $item->getTitle(),
                'points' => $g,
                'url' => Url::fromUri('entity:node/' . $item->id())->toString(),
                'photo' => $item->field_featured_photo->entity->uri->value
            ];

        endforeach;

        return $points;
    }
}
