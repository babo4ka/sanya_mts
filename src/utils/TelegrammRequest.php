<?php

namespace PhpZone\Services;

use GuzzleHttp\Client;

use GuzzleHttp\RequestOptions;

class TelegramNotifier

{

    public static function notify($text)

    {

        $client = new Client();

        try {

            $client->post('', [

                RequestOptions::JSON => [

                ]

            ]);

        } catch (\Exception $e) {

            var_dump($e->getMessage());

        }

    }

}

TelegramNotifier::notify('lol kek cheburek');
?>