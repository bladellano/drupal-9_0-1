<?php

namespace Drupal\helloworld\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Component\Serialization\Json;

class ApiController extends ControllerBase
{

    public function getFact()
    {
        $client = \Drupal::httpClient();
        $request = $client->get("https://catfact.ninja/fact");

        $response = $request->getBody()->getContents();

        $result = json::decode($response);

        return json_encode($result);
    }
}
